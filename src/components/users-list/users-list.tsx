import UserCard from "../user-card/user-card";
import { TUser } from "../../types/types";
import styles from "./users-list.module.scss";

interface IUsersList {
  users: Array<TUser>;
}

function UsersList({ users }: IUsersList): JSX.Element {
  return (
    <ul className={styles.usersList}>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard
            avatar={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
            liked={false}
          />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
