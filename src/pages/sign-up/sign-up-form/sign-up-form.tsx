import { FormEvent } from "react";
import Input from "../../../components/input/input";
import styles from "./sign-up-form.module.scss";
import { TSignUpForm, TSignUpRequest } from "../../../types/types";
import { useForm } from "../../../hooks/use-form";

interface ISignUpForm {
  onSubmitHandler: (data: TSignUpRequest) => void;
}

function SignUpForm({ onSubmitHandler }: ISignUpForm): JSX.Element {
  const { formValues, formErrors, isFormValid, onFieldChange } = useForm<TSignUpForm>({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!isFormValid()) return;
    onSubmitHandler({ email: formValues.email, password: formValues.password });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <h3 className={styles.legend}>Регистрация</h3>
        <Input
          value={formValues.name}
          onChange={onFieldChange}
          name="name"
          type="text"
          header="Имя"
          error={formErrors.name}
        />
        <Input
          value={formValues.email}
          onChange={onFieldChange}
          name="email"
          type="email"
          header="Электронная почта"
          error={formErrors.email}
        />
        <Input
          value={formValues.password}
          onChange={onFieldChange}
          name="password"
          type="password"
          header="Пароль"
          error={formErrors.password}
        />
        <Input
          value={formValues.repeatPassword}
          onChange={onFieldChange}
          name="repeatPassword"
          type="password"
          header="Подтвердите пароль"
          error={formErrors.repeatPassword}
        />
      </div>
      <button className={styles.button} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
}

export default SignUpForm;
