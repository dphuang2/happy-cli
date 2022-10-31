export const generateApiUrl = (dev?: boolean): string => {
  if (dev) return 'http://localhost:8911/deploy'
  return 'https://api.gethappy.dev/deploy'
}
