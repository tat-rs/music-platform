import React, { ChangeEvent } from "react";
import styles from "../styles/FormInfoTrack.module.scss";

export type InputProps = {
  value: string,
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

export interface FormInfoTrackProps {
  name: InputProps,
  artist: InputProps,
  text: InputProps,
}

function FormInfoTrack({
  name,
  artist,
  text
}: FormInfoTrackProps) {

  return (
    <div className={styles.info}>
      <label className={styles.info__label} htmlFor="name">
        <input
          className={styles.info__input}
          id="name"
          name="name"
          type="text"
          placeholder="Введите название трека"
          value={name.value}
          onChange={(evt) => name.onChange(evt)}
          />
      </label>
      <label className={styles.info__label} htmlFor="artist">
        <input
          className={styles.info__input}
          id="artist"
          name="artist"
          type="text"
          placeholder="Введите имя автора"
          value={artist.value}
          onChange={(evt) => artist.onChange(evt)}
        />
      </label>
      <label className={styles.info__label} htmlFor="text">
        <textarea
          className={styles.info__input}
          name="text"
          id="text"
          cols={30}
          rows={5}
          placeholder="Введите текст песни"
          value={text.value}
          onChange={(evt) => text.onChange(evt)}
        />
      </label>
    </div>
  )
}

export default FormInfoTrack;
