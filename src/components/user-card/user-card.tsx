import styles from "./user-card.module.scss";

interface IUserCard {
  avatar: string;
  firstName: string;
  lastName: string;
  liked: boolean;
}

function UserCard({ avatar, firstName, lastName, liked }: IUserCard): JSX.Element {
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
        />
      </p>
    </section>
  );
}

export default UserCard;
