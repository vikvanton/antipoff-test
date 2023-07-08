import UsersList from "../../components/users-list/users-list";
import ButtonPaging from "../../components/button-paging/button-paging";
import ButtonNavigation from "../../components/button-navigation/button-navigation";
import styles from "./users.module.scss";
import { data } from "../../api/data";

function Users(): JSX.Element {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.btnNavContainer}>
          <ButtonNavigation type="exit" text="Выход" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.head}>Наша команда</h1>
          <p className={styles.paragraph}>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <UsersList users={data.data} />
        <ButtonPaging text="Показать еще" />
      </main>
    </>
  );
}

export default Users;
