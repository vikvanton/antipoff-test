import styles from "./user-contacts.module.scss";

interface IUserContacts {
  email: string;
}

function UserContacts({ email }: IUserContacts): JSX.Element {
  return (
    <section className={styles.contacts}>
      <p className={styles.contact}>
        <img src="./icons/phone.svg" />
        <span>+7 (954) 333-44-55</span>
      </p>
      <p className={styles.contact}>
        <img src="./icons/mail.svg" />
        <span>{email}</span>
      </p>
    </section>
  );
}

export default UserContacts;
