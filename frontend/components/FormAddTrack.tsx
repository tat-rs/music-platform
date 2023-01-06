import { useEffect } from "react";
import styles from "../styles/FormAddTrack.module.scss";

interface FormAddTrackProps {
  audio: File | string,
  changeAudio: (evt: React.ChangeEvent<HTMLInputElement>) => void,
  isValid: boolean,
  setIsValid: (state: boolean) => void,
}

function FormAddTrack({audio, changeAudio, isValid, setIsValid}: FormAddTrackProps) {

  useEffect(() => {
    if(audio === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [audio])

  return (
    <>
      <div className={styles.addTrack}>
        <h3 className={styles.addTrack__title}>Загрузите сам трек</h3>
        <input
          className={styles.addTrack__input}
          id="cover"
          name="cover"
          type="file"
          accept="audio/*"
          onChange={(evt) => changeAudio(evt)}
        />
        <label className={styles.addTrack__label} htmlFor="cover">
          <span className={styles.addTrack__button} >Загрузить</span>
        </label>
      </div>
      {
        isValid && (
          <p className={styles.addTrack__success}>Файл добавлен!</p>
        )
      }
    </>
  )
}

export default FormAddTrack;
