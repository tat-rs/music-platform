import styles from "../styles/FormAddTrack.module.scss";

interface FormAddTrackProps {
  changeAudio: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

function FormAddTrack({changeAudio}: FormAddTrackProps) {
  return (
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
  )
}

export default FormAddTrack;
