import styles from "../styles/FormAddTrack.module.scss";

function FormAddTrack() {
  return (
    <form name="add-track" className={styles.addTrack}>
        <h3 className={styles.addTrack__title}>Загрузите сам трек</h3>
        <input
          className={styles.addTrack__input}
          id="cover"
          name="cover"
          type="file"
          accept="audio/*" />
        <label className={styles.addTrack__label} htmlFor="cover">
          <span className={styles.addTrack__button} >Загрузить</span>
        </label>
      </form>
  )
}

export default FormAddTrack;
