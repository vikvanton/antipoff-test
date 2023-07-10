import styles from "./error.module.scss";

function Error(): JSX.Element {
  return <p className={styles.error}>Страница не найдена</p>;
}

export default Error;
