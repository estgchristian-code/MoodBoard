# Security deployment notes

Production security headers are configured in `vercel.json` and apply to all
paths. The production CSP is sent once as an HTTP response header; it is not also
added as an HTML meta policy.

The CSP allows only same-origin scripts and connections plus the external
resources used by the app: Google Fonts, Unsplash, and Wikimedia images. Inline
styles remain enabled for the app's React style attributes. Do not add
`unsafe-eval`, wildcard hosts, or additional external origins without confirming
they are required.

HSTS is configured with a one-year max age and no `includeSubDomains` or `preload`.
Browsers honor HSTS only when received over HTTPS; confirm the published domain
uses HTTPS and that the response includes this header. Validate the deployed
response headers after each Vercel deployment.

Do not put secrets in `VITE_` variables: Vite embeds those values in public client
assets. The current build does not generate source maps.
