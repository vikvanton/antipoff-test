import { useState } from "react";
import styles from "./sign-up-input.module.scss";

interface ISignUpInput {
  type: "text" | "password";
  header: string;
  error: string | null;
}

function SignUpInput({ type, header, error }: ISignUpInput): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <label className={styles.signUpInput}>
      <span className={styles.inputHeader}>{header}</span>
      <span className={styles.inputGroup}>
        <span className={`${styles.inputBlock}${error ? ` ${styles.inputBlockError}` : ""}`}>
          <input
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

export default SignUpInput;
