import { useNavigate } from "react-router-dom";
import ButtonNavigation from "../../../components/button-navigation/button-navigation";
import styles from "./user.header.module.scss";
import { useAppDispatch } from "../../../hooks/use-app-dispatch";
import { CLEAR_AUTH } from "../../../store/actions/auth-actions";

interface IUserHeader {
  avatar: string;
  firstName: string;
  lastName: string;
  fromMain: boolean;
}

function UserHeader({ avatar, firstName, lastName, fromMain }: IUserHeader): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onBackClick = () => {
    if (fromMain) navigate(-1);
    else navigate("/");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.btnNavContainer}>
        <ButtonNavigation type="back" text="Назад" onClick={onBackClick} />
        <ButtonNavigation type="exit" text="Выход" onClick={() => dispatch({ type: CLEAR_AUTH })} />
      </nav>
      <section className={styles.info}>
        <img className={styles.avatar} src={avatar} />
        <div className={styles.data}>
          <h1 className={styles.name}>
            {firstName} {lastName}
          </h1>
          <p className={styles.position}>Партнер</p>
        </div>
      </section>
    </header>
  );
}

export default UserHeader;
