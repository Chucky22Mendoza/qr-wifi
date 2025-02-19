/**
 * Configuration object for environment variables.
 *
 * @property {string} apiUrl - The base URL for the QR code generation API.
 * @property {string} secretKey - A secret key used for authentication or encryption.
 */
export const env = {
  apiUrl: process.env.VITE_PUBLIC_API_URL,
  secretKey: process.env.VITE_SECRET_KEY,
}
