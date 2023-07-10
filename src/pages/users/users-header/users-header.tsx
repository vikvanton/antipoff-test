import ButtonNavigation from "../../../components/button-navigation/button-navigation";
import { useAppDispatch } from "../../../hooks/use-app-dispatch";
import { CLEAR_AUTH } from "../../../store/actions/auth-actions";
import styles from "./users.header.module.scss";

function UsersHeader(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <nav className={styles.btnNavContainer}>
        <ButtonNavigation type="exit" text="Выход" onClick={() => dispatch({ type: CLEAR_AUTH })} />
      </nav>
      <section className={styles.info}>
        <h1 className={styles.head}>Наша команда</h1>
        <p className={styles.paragraph}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
          плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
        </p>
      </section>
    </header>
  );
}

export default UsersHeader;
