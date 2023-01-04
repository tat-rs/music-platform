import Image from "next/image";
import {GetServerSideProps} from "next";
import styles from "../../styles/Track.module.scss";
import LinkElement from "../../components/Link";
import { ITrackItem } from "../../types/types";
import { wrapper } from "../../store/store";
import { Context } from "next-redux-wrapper";
import axios from "axios";
import { BASE_URL_API } from "../../utils/constants";

export interface TrackProps {
  track: ITrackItem
}

function Track({track}: TrackProps) {
  return (
    <section className={styles.track}>
      <LinkElement link="/tracks" text="К списку"/>
      <div className={styles.track__container}>
        <Image src={`${BASE_URL_API}/${track.picture}`}
          alt={track.name}
          width={244}
          height={198}
          className={styles.track__image}
        />
        <div className={styles.track__desc}>
          <p className={styles.track__title_grey}>{`Исполнитель - ${track.artist}`}</p>
          <h2 className={styles.track__title}>{`Название трека - ${track.name}`}</h2>
          <p className={styles.track__text}>{`Прослушиваний - ${track?.listens}`}</p>
        </div>
      </div>
      <h3 className={styles.track__title_grey}>Текст</h3>
      <p className={styles.track__text}>{track.text}</p>
      <form className={styles.track__form} name="add-comment">
        <label htmlFor="user-name" className={styles.track__label}>
          <input
            className={styles.track__input}
            id="user-name"
            name="user-name"
            type="text"
            placeholder="Ваше имя"
          />
        </label>
        <label htmlFor="comment" className={styles.track__label}>
          <textarea
            className={styles.track__input}
            name="comment"
            id="comment"
            cols={30}
            rows={10}
            placeholder="Ваш комментарий" 
          />
        </label>
        <button type="submit" className={styles.track__submit}>Отправить</button>
      </form>
    </section>
  )
}

export default Track;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({params}) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params?.id)
  return {
      props: {
          track: response.data
      }
  }
});