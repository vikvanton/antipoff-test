import UsersHeader from "./users-header/users-header";
import UsersList from "./users-list/users-list";
import ButtonPaging from "../../components/button-paging/button-paging";
import styles from "./users.module.scss";
import { data } from "../../api/data";

function Users(): JSX.Element {
  return (
    <>
      <UsersHeader />
      <main className={styles.main}>
        <UsersList users={data.data} />
        <ButtonPaging text="Показать еще" />
      </main>
    </>
  );
}

export default Users;
