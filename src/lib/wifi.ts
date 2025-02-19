/**
 * Constructs a WiFi configuration string in the format required for QR codes.
 *
 * @param ssid - The SSID of the WiFi network.
 * @param password - The password for the WiFi network.
 * @returns A string formatted as a WiFi configuration for QR code generation.
 */
export const ConstructWifi = (ssid: string, password: string) => `WIFI:T:WPA;S:${ssid};P:${password};;`;