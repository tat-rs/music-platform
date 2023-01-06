import React, { ChangeEvent, useEffect, useRef } from "react";
import styles from "../styles/FormInfoTrack.module.scss";

export type InputProps = {
  value: string,
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export interface FormInfoTrackProps {
  name: InputProps,
  artist: InputProps,
  text: InputProps,
  setIsValid: (state: boolean) => void,
}

function FormInfoTrack({
  name,
  artist,
  text,
  setIsValid
}: FormInfoTrackProps) {

  useEffect(() => {
    if(name.value !== "" && artist.value !== "" && text.value !== "") {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [name.value, artist.value, text.value, setIsValid]);

  return (
    <div className={styles.info}>
      <div className={styles.info__item}>
        <input
          className={styles.info__input}
          id="name"
          name="name"
          type="text"
          value={name.value}
          onChange={(evt) => name.onChange(evt)}
          required
        />
        <label className={styles.info__label} htmlFor="name">Введите название трека</label>
      </div>
      <div className={styles.info__item}>
        <input
          className={styles.info__input}
          id="artist"
          name="artist"
          type="text"
          value={artist.value}
          onChange={(evt) => artist.onChange(evt)}
          required
        />
        <label className={styles.info__label} htmlFor="artist">Введите имя автора</label>
      </div>
      <div className={styles.info__item}>
        <textarea
          className={styles.info__input}
          name="text"
          id="text"
          cols={30}
          rows={5}
          value={text.value}
          onChange={(evt) => text.onChange(evt)}
          required
        />
        <label className={styles.info__label} htmlFor="text">Введите текст песни</label>
      </div>
    </div>
  )
}

export default FormInfoTrack;
