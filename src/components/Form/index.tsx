import { ISSID } from '@/domain/SSID';
import styles from './Form.module.css';
import React from 'react';
import { encrypt } from '@/lib/crypto';

/**
 * Represents the properties for a component that handles SSID data.
 *
 * @property {function} onChange - Callback function invoked when the SSID data changes.
 * @property {ISSID} data - The current SSID data being managed by the component.
 */
type Props = {
  onChange: (data: ISSID) => void;
  data: ISSID;
};

/**
 * Renders a form component for entering network credentials.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onChange - Callback function to handle changes in form inputs.
 * @param {Object} props.data - The current form data containing 'ssid' and 'password'.
 * @returns {React.ReactElement} The rendered form component.
 *
 * The form includes inputs for network name (SSID) and password, updating the
 * local storage and invoking the onChange callback with updated data on input change.
 */
function Form({ onChange, data }: Props): React.ReactElement {
  return (
    <form className={styles.form}>
      <label>
        <span>Network name</span>
        <input
          type="text"
          placeholder="Network name"
          value={data.ssid}
          onChange={(e) => {
            const value = e.target.value;
            onChange({ ...data, ssid: value });
            localStorage.setItem('ssid', encrypt(value));
          }}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="text"
          placeholder="Password"
          value={data.password}
          onChange={(e) => {
            const value = e.target.value;
            onChange({ ...data, password: value });
            localStorage.setItem('pwd', encrypt(value));
          }}
        />
      </label>
    </form>
  );
}

export default Form;
