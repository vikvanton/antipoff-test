import styles from "./button-paging.module.scss";

interface IButtonPaging {
  text: string;
  nextPageClick?: () => void;
}

function ButtonPaging({ text, nextPageClick }: IButtonPaging): JSX.Element {
  return (
    <button className={styles.btnPage} onClick={nextPageClick}>
      <span className={styles.btnText}>{text}</span>
      <img src="./icons/arrow-down.svg" />
    </button>
  );
}

export default ButtonPaging;
