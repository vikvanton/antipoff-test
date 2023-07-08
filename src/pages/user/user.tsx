import { useParams } from "react-router-dom";
import UserHeader from "./user-header/user.header";
import styles from "./user.module.scss";
import { data } from "../../api/data";
import { TUser } from "../../types/types";
import UserDescription from "./user-description/user-description";
import UserContacts from "./user-contacts/user-contacts";

function User() {
  const { id } = useParams();
  const user = data.data.find((user) => user.id === Number(id)) as TUser;

  return (
    <>
      <UserHeader avatar={user.avatar} firstName={user.first_name} lastName={user.last_name} />
      <main className={styles.main}>
        <UserDescription />
        <UserContacts email={user.email} />
      </main>
    </>
  );
}

export default User;
