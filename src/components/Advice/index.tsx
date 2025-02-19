import styles from './Advice.module.css';

/**
 * Represents the properties required for a component that handles
 * network connection details.
 *
 * @property {string} src - The source URL or path for the network resource.
 * @property {string} ssid - The SSID of the network to connect to.
 * @property {string} password - The password for the network connection.
 */
type Props = {
  src: string;
  ssid: string;
  password: string;
};

/**
 * Renders a component that displays a button to print a WiFi login card.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.src - The source URL of the image to be printed.
 * @param {string} props.ssid - The SSID of the WiFi network.
 * @param {string} props.password - The password for the WiFi network.
 * @returns {React.ReactElement} A React element containing the advice component.
 *
 * The component includes a button that, when clicked, creates an iframe to print
 * a WiFi login card with the provided image, SSID, and password.
 */
function Advice({ src, ssid, password }: Props): React.ReactElement {
  const printImage = (imageUrl: string) => {
    let iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);

    iframe.onload = function() {
        let doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc) {
          doc.body.innerHTML = `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; gap: 10px;">
            <h1 style="margin: 5px 0;">WiFi Login</h1>
            <img width="250" src="${imageUrl}" onload="window.print(); window.onafterprint = function() { parent.document.body.removeChild(parent.document.querySelector('iframe')); }">
            <span style="margin: 5px 0;">SSID: ${ssid}</span>
            <span>PASSWORD: ${password}</span>
          </div>`;
        }
    };
    iframe.src = 'about:blank';
}

  return (
    <div className={styles.advice}>
      <p>Point your phone's camera at the QR code to connect to WiFi.</p>
      <button onClick={() => printImage(src)}>Print WiFi Card</button>
    </div>
  );
}

export default Advice;
