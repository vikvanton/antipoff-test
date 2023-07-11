import { useNavigate } from "react-router-dom";
import ButtonNavigation from "../../../components/button-navigation/button-navigation";
import styles from "./user.header.module.scss";
import { useAppDispatch } from "../../../hooks/use-app-dispatch";
import { CLEAR_AUTH } from "../../../store/actions/auth-actions";
import { ChangeEvent, useState, useRef } from "react";

interface IUserHeader {
  avatar: string;
  firstName: string;
  lastName: string;
  fromMain: boolean;
}

function UserHeader({ avatar, firstName, lastName, fromMain }: IUserHeader): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  // Стейт хранения url выбираемой фотографии
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const onBackClick = () => {
    if (fromMain) navigate(-1);
    else navigate("/");
  };

  /**
   * Ф-ция-обработчик инпута загрузки фото.
   * Читает файл, получает его url, сохраняет его в стейт.
   *  */
  const onImgInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      e.target.value = "";
    }
  };

  /**
   * Ф-ция-обработчик кнопки загрузки фото.
   * Вызывает click для инпута файла, если url фото в стейте нет.
   * Иначе очищает стейт с url
   *  */
  const onBtnImgSelectClick = () => {
    if (imageUrl) setImageUrl(null);
    else inputRef.current?.click();
  };

  return (
    <header className={styles.header}>
      <nav className={styles.btnNavContainer}>
        <ButtonNavigation type="back" text="Назад" onClick={onBackClick} />
        <ButtonNavigation type="exit" text="Выход" onClick={() => dispatch({ type: CLEAR_AUTH })} />
      </nav>
      <section className={styles.info}>
        <div className={styles.avatarBlock}>
          <img className={styles.avatar} src={imageUrl ? imageUrl : avatar} />
          {/** Кнопка выбора/отмены выбора фото */}
          <button className={styles.btnImgSelect} onClick={onBtnImgSelectClick}>
            {imageUrl ? "Отменить" : "Выбрать фото"}
          </button>
          {/** Скрытый инпут для загрузки фото */}
          <input
            ref={inputRef}
            className={styles.imgInput}
            onChange={onImgInputChange}
            type="file"
            accept=".jpeg, .jpg"
          />
        </div>
        <div className={styles.data}>
          <h1 className={styles.name}>
            {firstName} {lastName}
          </h1>
          <p className={styles.position}>Партнер</p>
        </div>
      </section>
    </header>
  );
}

export default UserHeader;
