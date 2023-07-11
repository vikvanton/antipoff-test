import { ChangeEvent, useState } from "react";

/* Хук для работы с формой */
export const useForm = <T>(
  inputValues: T
): {
  formValues: T /* Поля формы */;
  formErrors: { [key in keyof T]: string } /* Поля для ошибок формы */;
  isFormValid: () => boolean /* Ф-ция проверки на валидность полей формы */;
  onFieldChange: (e: ChangeEvent<HTMLInputElement>) => void /* Ф-ция изменения полей формы */;
} => {
  // Инициализируем объект-состояние полей формы на основе входного объекта
  const [formValues, setFormValues] = useState<T>(inputValues);
  /* На основе входного объекта с полями формы создаем объект-состояние
   для сообшений об ошибке каждого из полей формы */
  const [formErrors, setFormErrors] = useState<{ [key in keyof T]: string }>(() => {
    const initialErros: { [key: string]: string } = {};
    for (const key in inputValues) {
      initialErros[key] = "";
    }
    return initialErros as { [key in keyof T]: string };
  });

  // Ф-ция обработки изменения значения поля формы
  const onFieldChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormErrors({ ...formErrors, [e.target.name]: "" });
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Ф-ция проверки валидности полей формы
  const isFormValid = (): boolean => {
    // Признак валидности формф
    let isValid = true;
    // Переменная для пароля
    let pass = "";
    // Объект для сохранения сообщений об ошибке для полей формы
    const hasFormErrors: { [key: string]: string } = {};
    // Ф-ция установки сообщения об ошибке для поля формы
    const setFieldError = (key: Extract<keyof T, string>, message: string) => {
      hasFormErrors[key] = message;
      // Если хотя бы в одном поле ошибка - устанавливаем признак невалидной формы
      if (message) isValid = false;
    };
    for (const key in formValues) {
      switch (key) {
        // Если поле пароля, проверяем на пустое значение и допустимую длину
        case "password":
          if (!formValues[key]) setFieldError(key, "Поле не должно быть пустым");
          else if (
            (formValues[key] as string).length < 6 ||
            (formValues[key] as string).length > 15
          )
            setFieldError(key, "Пароль должен содержать от 6 до 15 символов");
          else setFieldError(key, "");
          // Запоминаем пароль
          pass = formValues[key] as string;
          break;
        case "repeatPassword":
          // Для поля "Повторите пароль" проверяем на пустое значение и равенство паролей
          if (!formValues[key]) setFieldError(key, "Поле не должно быть пустым");
          else if (formValues[key] !== pass) setFieldError(key, "Пароли не совпадают");
          else setFieldError(key, "");
          break;
        // Для остальных полей проверяем на пустое значение
        default:
          if (!formValues[key]) setFieldError(key, "Поле не должно быть пустым");
          else setFieldError(key, "");
      }
    }
    // Если форма невалидна, устанавливаем ошибки соответсвующих полей
    if (!isValid) setFormErrors({ ...(hasFormErrors as { [key in keyof T]: string }) });
    return isValid;
  };

  return { formValues, formErrors, isFormValid, onFieldChange };
};
