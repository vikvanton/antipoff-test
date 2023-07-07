import { FormEvent } from "react";
import SignUpInput from "../sign-up-input/sign-up-input";
import styles from "./sign-up-form.module.scss";

function SignUpForm(): JSX.Element {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <h3 className={styles.legend}>Регистрация</h3>
        <SignUpInput type="text" header="Имя" error={null} />
        <SignUpInput type="text" header="Электронная почта" error="Ошибка" />
        <SignUpInput type="password" header="Пароль" error={null} />
        <SignUpInput type="password" header="Подтвердите пароль" error={null} />
      </div>
      <button className={styles.button} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default SignUpForm;
