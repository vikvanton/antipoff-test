import { FormEvent } from "react";
import Input from "../../../components/input/input";
import styles from "./sign-up-form.module.scss";

function SignUpForm(): JSX.Element {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <h3 className={styles.legend}>Регистрация</h3>
        <Input type="text" header="Имя" error={null} />
        <Input type="text" header="Электронная почта" error="Ошибка" />
        <Input type="password" header="Пароль" error={null} />
        <Input type="password" header="Подтвердите пароль" error={null} />
      </div>
      <button className={styles.button} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default SignUpForm;
