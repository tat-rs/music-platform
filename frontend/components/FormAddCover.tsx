import Image from "next/image";
import styles from "../styles/FormAddCover.module.scss";

function FormAddCover() {

  return (
    <form name="add-cover" className={styles.cover}>
      <Image
        src='https://images.unsplash.com/photo-1669666808012-3e120637a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        alt="Обложка"
        width={244}
        height={198}
        className={styles.cover__image}
      />
      <div className={styles.cover__container}>
        <h3 className={styles.cover__title}>Загрузите обложку трека</h3>
        <input
          className={styles.cover__input}
          id="cover"
          name="cover"
          type="file"
          accept="image/*" />
        <label className={styles.cover__label} htmlFor="cover">
          <span className={styles.cover__button} >Загрузить</span>
        </label>
      </div>
    </form>
  )
}

export default FormAddCover;
