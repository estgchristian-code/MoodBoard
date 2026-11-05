const externalHosts = new Set([
  "commons.wikimedia.org",
  "images.unsplash.com",
  "thumb.wikimedia.org",
  "upload.wikimedia.org",
]);

export function isSafeExternalUrl(value) {
  if (typeof value !== "string" || value.length > 2048) return false;

  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      !url.username &&
      !url.password &&
      !url.port &&
      externalHosts.has(url.hostname.toLowerCase())
    );
  } catch {
    return false;
  }
}

function isSafeCommonsPath(imagePath) {
  const pathParts = imagePath.split("/");
  if (
    pathParts.length !== 3 ||
    !/^[a-f0-9]$/i.test(pathParts[0]) ||
    !/^[a-f0-9]{2}$/i.test(pathParts[1])
  ) {
    return false;
  }

  try {
    const filename = decodeURIComponent(pathParts[2]);
    return (
      filename.length > 0 &&
      filename !== "." &&
      filename !== ".." &&
      !/[\\/:?#\u0000-\u001f\u007f]/.test(filename) &&
      !/%(?![a-f0-9]{2})/i.test(pathParts[2])
    );
  } catch {
    return false;
  }
}

export function isSupportedImageId(image) {
  if (typeof image !== "string") return false;
  if (image.startsWith("commons:")) {
    return isSafeCommonsPath(image.slice("commons:".length));
  }
  return /^photo-[a-z0-9-]{1,120}$/i.test(image);
}

export function imageUrl(image, width = 720) {
  if (!isSupportedImageId(image)) return "";

  const requestedWidth = Number.isFinite(width) ? Math.round(width) : 720;
  const safeWidth = Math.max(1, Math.min(2400, requestedWidth));

  if (image.startsWith("commons:")) {
    const imagePath = image.slice("commons:".length);
    const pathParts = imagePath.split("/");
    const filename = pathParts[pathParts.length - 1];
    const filePath = pathParts.join("/");
    const originalUrl = `https://upload.wikimedia.org/wikipedia/commons/${filePath}`;

    if (pathParts.length !== 3 || safeWidth > 1300) return originalUrl;

    const thumbnailWidth = safeWidth <= 600 ? 500 : 1280;
    return `https://thumb.wikimedia.org/wikipedia/commons/thumb/${filePath}/${thumbnailWidth}px-${filename}`;
  }

  const thumbnailWidth = safeWidth <= 600 ? 480 : safeWidth;
  const quality = safeWidth <= 600 ? 78 : 82;
  return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=${thumbnailWidth}&q=${quality}`;
}

export function filenameFromTitle(title, extension) {
  const slug =
    title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt-BR")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 80) || "imagem";
  return `${slug}.${extension}`;
}
