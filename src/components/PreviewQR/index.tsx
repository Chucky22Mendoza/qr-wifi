/**
 * Defines the properties for a component.
 *
 * @typedef {Object} Props
 * @property {string} src - The source URL for the component.
 */
type Props = {
  src: string;
};

/**
 * Renders a QR code image with a specified source URL.
 *
 * @param {Object} props - The component props.
 * @param {string} props.src - The source URL of the QR code image.
 * @returns {React.ReactElement} An image element displaying the QR code.
 */
function PreviewQR({ src }: Props): React.ReactElement {
  return (
    <img
      width={164}
      src={src}
      alt="QR Code"
    />
  );
}

export default PreviewQR;
