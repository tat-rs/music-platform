import styles from "../styles/FormInfoTrack.module.scss";

function FormInfoTrack() {

  return (
    <form className={styles.info} name="track-info">
      <label className={styles.info__label} htmlFor="name-track">
        <input
          className={styles.info__input}
          id="name-track"
          name="name-track"
          type="text"
          placeholder="Введите название трека"
          />
      </label>
      <label className={styles.info__label} htmlFor="artist">
        <input
          className={styles.info__input}
          id="artist"
          name="artist"
          type="text"
          placeholder="Введите имя автора"
        />
      </label>
      <label className={styles.info__label} htmlFor="text-track">
        <textarea
          className={styles.info__input}
          name="text-track"
          id="text-track"
          cols={30}
          rows={5}
          placeholder="Введите текст песни"
        />
      </label>
      <button className={styles.info__submit}>Сохранить</button>
    </form>
  )
}

export default FormInfoTrack;
