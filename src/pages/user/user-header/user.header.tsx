import ButtonNavigation from "../../../components/button-navigation/button-navigation";
import styles from "./user.header.module.scss";

interface IUserHeader {
  avatar: string;
  firstName: string;
  lastName: string;
}

function UserHeader({ avatar, firstName, lastName }: IUserHeader): JSX.Element {
  return (
    <header className={styles.header}>
      <nav className={styles.btnNavContainer}>
        <ButtonNavigation type="back" text="Назад" />
        <ButtonNavigation type="exit" text="Выход" />
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
