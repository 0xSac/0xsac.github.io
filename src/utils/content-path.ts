export function contentPath(id: string) {
  return id.replaceAll('\\', '/').replace(/\.(md|mdx)$/i, '');
}
