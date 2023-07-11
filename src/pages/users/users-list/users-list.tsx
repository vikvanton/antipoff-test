import { Link } from "react-router-dom";
import UserCard from "../../../components/user-card/user-card";
import { ILikedUser } from "../../../types/types";
import styles from "./users-list.module.scss";

interface IUsersList {
  users: Array<ILikedUser>;
  setLike: (id: number) => void;
}

function UsersList({ users, setLike }: IUsersList): JSX.Element {
  return (
    <ul className={styles.usersList}>
      {users.map((user) => (
        <li key={user.id}>
          <Link to={`/${user.id}`} state={true}>
            <UserCard
              id={user.id}
              avatar={user.avatar}
              firstName={user.first_name}
              lastName={user.last_name}
              liked={user.liked}
              setLike={setLike}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
