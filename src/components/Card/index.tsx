import { useState } from 'react';
import Advice from '../Advice';
import Form from '../Form';
import { ISSID } from '@/domain/SSID';
import styles from './Card.module.css';
import { env } from '@/config/config';
import { ConstructWifi } from '@/lib/wifi';
import PreviewQR from '../PreviewQR';
import { decrypt } from '@/lib/crypto';

/**
 * Renders a Card component that facilitates WiFi login functionality.
 * Utilizes local storage to retrieve SSID and password, constructs a WiFi
 * configuration, and generates a QR code for easy access.
 *
 * @returns {React.ReactElement} The rendered Card component.
 */
function Card(): React.ReactElement {
  const [formData, setFormData] = useState<ISSID>({
    ssid: localStorage.getItem('ssid') ? decrypt(localStorage.getItem('ssid')!) ?? '' : '',
    password: localStorage.getItem('pwd') ? decrypt(localStorage.getItem('pwd')!) ?? '' : '',
  });
  const wifi = ConstructWifi(formData.ssid, formData.password);
  const imageUrl = `${env.apiUrl}${wifi}`;

  return (
    <main className={styles.card}>
      <h1>WiFi Login</h1>
      <div className={styles.generator}>
        <PreviewQR src={imageUrl} />
        <Form onChange={setFormData} data={formData} />
      </div>
      <Advice src={imageUrl} password={formData.password} ssid={formData.ssid} />
    </main>
  );
}

export default Card;
