import styles from "./button-navigation.module.scss";

interface IButtonNavigation {
  type: "back" | "exit";
  text: string;
}

function ButtonNavigation({ type, text }: IButtonNavigation): JSX.Element {
  return <button className={type === "exit" ? styles.btnExit : styles.btnBack}>{text}</button>;
}

export default ButtonNavigation;
