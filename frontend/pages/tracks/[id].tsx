import Image from "next/image";
import styles from "../../styles/Track.module.scss";
import LinkElement from "../../components/Link";

const track = {
  _id: 1,
  name: "Письмо Санте",
  artist: "Люся Чеботина",
  text: "лалаллалала",
  listens: 0,
  picture: 'https://images.unsplash.com/photo-1669666808012-3e120637a62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  audio: '',
  comments: [
    {trackId: 1,
    username: 'Вася',
    text: "норм",}
  ]
}

function Track() {
  return (
    <section className={styles.track}>
      <LinkElement link="/tracks" text="К списку"/>
      <div className={styles.track__container}>
        <Image src={track.picture}
          alt={track.name}
          width={244}
          height={198}
          className={styles.track__image}></Image>
        <div className={styles.track__desc}>
          <p className={styles.track__title_grey}>{`Исполнитель - ${track.artist}`}</p>
          <h2 className={styles.track__title}>{`Название трека - ${track.name}`}</h2>
          <p className={styles.track__text}>{`Прослушиваний - ${track.comments.length}`}</p>
        </div>
      </div>
      <h3 className={styles.track__title_grey}>Текст</h3>
      <p className={styles.track__text}>{track.text}</p>
      <form className={styles.track__form}>
        <label htmlFor="" className={styles.track__label}>
          <input type="text" className={styles.track__input} placeholder="Ваше имя" />
        </label>
        <label htmlFor="" className={styles.track__label}>
          <textarea name="" id="" cols={30}  rows={10} className={styles.track__input} placeholder="Ваш комментарий"></textarea>
        </label>
        <button type="submit" className={styles.track__submit}>Отправить</button>
      </form>
    </section>
  )
}

export default Track;
