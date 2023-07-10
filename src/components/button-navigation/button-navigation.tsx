import styles from "./button-navigation.module.scss";

interface IButtonNavigation {
  type: "back" | "exit";
  text: string;
  onClick?: () => void;
}

function ButtonNavigation({ type, text, onClick }: IButtonNavigation): JSX.Element {
  return (
    <button className={type === "exit" ? styles.btnExit : styles.btnBack} onClick={onClick}>
      {text}
    </button>
  );
}

export default ButtonNavigation;
