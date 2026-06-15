// Resizes/recompresses Hygraph (graphassets.com) media via its built-in
// image transformation API: /resize=width:N/output=format:webp,quality:Q/<assetId>
export function optimizeImage(url: string | undefined, width: number, quality = 100): string {
  if (!url || !url.includes('graphassets.com')) return url ?? ''

  const parts = url.split('/')
  const assetId = parts.pop()
  return [...parts, `resize=width:${width}`, `output=format:webp,quality:${quality}`, assetId].join('/')
}
