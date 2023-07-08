import styles from "./button-paging.module.scss";

interface IButtonPaging {
  text: string;
}

function ButtonPaging({ text }: IButtonPaging): JSX.Element {
  return (
    <button className={styles.btnPage}>
      <span className={styles.btnText}>{text}</span>
      <img src="./icons/arrow-down.svg" />
    </button>
  );
}

export default ButtonPaging;
