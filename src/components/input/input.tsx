import { useState } from "react";
import styles from "./input.module.scss";

interface IInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: "text" | "password" | "email";
  header: string;
  error: string;
}

function Input({ value, onChange, name, type, header, error }: IInput): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <label className={styles.signUpInput}>
      <span className={styles.inputHeader}>{header}</span>
      <span className={styles.inputGroup}>
        <span className={`${styles.inputBlock}${error ? ` ${styles.inputBlockError}` : ""}`}>
          <input
            value={value}
            onChange={onChange}
            name={name}
            className={styles.input}
            type={type === "password" ? (show ? "text" : "password") : type}
            autoComplete="on"
          />
          {type === "password" && (
            <img
              className={styles.eyeIcon}
              src="./icons/eye-off.svg"
              onClick={() => setShow(!show)}
            />
          )}
        </span>
        {error && <span className={styles.error}>{error}</span>}
      </span>
    </label>
  );
}

export default Input;
