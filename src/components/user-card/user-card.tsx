import { MouseEvent } from "react";
import styles from "./user-card.module.scss";

interface IUserCard {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  liked: boolean;
  setLike: (id: number) => void;
}

function UserCard({ id, avatar, firstName, lastName, liked, setLike }: IUserCard): JSX.Element {
  const onLikeClick = (e: MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setLike(id);
  };

  return (
    <section className={styles.card}>
      <img className={styles.avatar} src={avatar} />
      <p className={styles.name}>
        {firstName} {lastName}
      </p>
      <p className={styles.likeContainer}>
        <img
          className={styles.like}
          src={`${liked ? "./icons/like-fill.svg" : "./icons/like-empty.svg"}`}
          onClick={onLikeClick}
        />
      </p>
    </section>
  );
}

export default UserCard;
