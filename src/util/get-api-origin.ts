export const getApiOrigin = ({dev}: {dev?: boolean}): string => {
  if (dev) return 'http://localhost:8911'
  return 'https://api.gethappy.dev'
}