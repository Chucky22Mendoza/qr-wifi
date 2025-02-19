import { env } from '@/config/config';
import CryptoJS from 'crypto-js';

/**
 * Encrypts a given text using AES encryption with a predefined secret key.
 *
 * @param text - The plaintext string to be encrypted.
 * @returns The encrypted text as a string.
 */
export const encrypt = (text: string): string => {
  return CryptoJS.AES.encrypt(text, env.secretKey).toString();
};

/**
 * Decrypts a given ciphertext using AES encryption with a predefined secret key.
 *
 * @param ciphertext - The encrypted text to be decrypted.
 * @returns The decrypted plaintext as a UTF-8 string.
 */
export const decrypt = (ciphertext: string): string => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, env.secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};
