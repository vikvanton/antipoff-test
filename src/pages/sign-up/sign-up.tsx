import SignUpForm from "../../components/sign-up-form/sign-up-form";
import styles from "./sign-up.module.scss";

function SignUp(): JSX.Element {
  return (
    <main className={styles.container}>
      <SignUpForm />
    </main>
  );
}

export default SignUp;
