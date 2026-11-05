export function imageUrl(image, width = 720) {
  if (image.startsWith("commons:")) {
    const imagePath = image.slice("commons:".length);
    const pathParts = imagePath.split("/");
    const filename = pathParts[pathParts.length - 1];
    const filePath = pathParts.join("/");
    const originalUrl = `https://upload.wikimedia.org/wikipedia/commons/${filePath}`;

    if (pathParts.length !== 3 || width > 1300) return originalUrl;

    const thumbnailWidth = width <= 600 ? 500 : 1280;
    return `https://thumb.wikimedia.org/wikipedia/commons/thumb/${filePath}/${thumbnailWidth}px-${filename}`;
  }

  const thumbnailWidth = width <= 600 ? 480 : width;
  const quality = width <= 600 ? 78 : 82;
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
