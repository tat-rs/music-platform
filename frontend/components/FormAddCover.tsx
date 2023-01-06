import Image from "next/image";
import React, { useEffect } from "react";
import styles from "../styles/FormAddCover.module.scss";

interface FormAddCoverProps {
  picture: File | string,
  changePicture: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isValid: boolean,
  setIsValid: (state: boolean) => void,
}

function FormAddCover({picture, changePicture, isValid, setIsValid}: FormAddCoverProps) {

  useEffect(() => {
    if(picture === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [picture])

  return (
    <div className={styles.cover}>
      <Image
        src='/question.jpg'
        alt="Обложка"
        width={244}
        height={190}
        className={styles.cover__image}
      />
      <div className={styles.cover__container}>
        <h3 className={styles.cover__title}>Загрузите обложку трека</h3>
        {
          isValid && (
            <p className={styles.cover__success}>Файл добавлен!</p>
          )
        }
        <input
          className={styles.cover__input}
          id="cover"
          name="cover"
          type="file"
          accept="image/*"
          onChange={(evt) => changePicture(evt)}
          />
        <label className={styles.cover__label} htmlFor="cover">
          <span className={styles.cover__button} >Загрузить</span>
        </label>
      </div>
    </div>
  )
}

export default FormAddCover;
