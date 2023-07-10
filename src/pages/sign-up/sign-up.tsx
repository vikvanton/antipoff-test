import Spinner from "../../components/spinner/spinner";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { useAppSelector } from "../../hooks/use-app-selector";
import { getAuth } from "../../store/actions/auth-actions";
import { selectAuthError, selectAuthRequest } from "../../store/selectors/auth-selectors";
import { TSignUpRequest } from "../../types/types";
import SignUpForm from "./sign-up-form/sign-up-form";
import styles from "./sign-up.module.scss";

function SignUp(): JSX.Element {
  const dispatch = useAppDispatch();
  const authLoading = useAppSelector(selectAuthRequest);
  const authError = useAppSelector(selectAuthError);

  const onSubmit = (data: TSignUpRequest) => {
    dispatch(getAuth(data));
  };

  return (
    <>
      <main className={styles.container}>
        <SignUpForm onSubmitHandler={onSubmit} />
        {authError && <p className={styles.error}>{authError}</p>}
      </main>
      {authLoading && <Spinner />}
    </>
  );
}

export default SignUp;
