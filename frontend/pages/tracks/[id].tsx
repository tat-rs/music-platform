import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import MainLayout from "../../layout/MainLayout";
import LinkElement from "../../components/Link";
import { BASE_URL_API } from "../../utils/constants";
import { IComment, ITrackItem } from "../../types/types";
import { wrapper } from "../../store/store";
import { useInput } from "../../hooks/useInput";
import styles from "../../styles/Track.module.scss";

export interface TrackProps {
  serverTrack: ITrackItem
}

function Track({serverTrack}: TrackProps) {
  const [track, setTrack] = useState<ITrackItem>(serverTrack);
  const userName = useInput('');
  const commentText = useInput('');
  
  async function onSubmit(evt: React.ChangeEvent<HTMLFormElement>) {
    evt.preventDefault();
    const comment:IComment = {
      trackId: track._id,
      username: userName.value,
      text: commentText.value,
    }
    try {
      const {data} = await axios.post(`${BASE_URL_API}/tracks/comment`, comment);
      const newData = {
        ...track,
        comments: [
          ...track.comments, data
        ]
      }
      setTrack(newData);
      userName.setValue('');
      commentText.setValue('');
    } catch (error) {
      
    }
  }

  return (
    <MainLayout title={`${track.name} - ${track.artist}`}>
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
      <form className={styles.track__form} name="add-comment" onSubmit={onSubmit}>
        <div className={styles.track__item}>
          <input
            className={styles.track__input}
            id="user-name"
            name="user-name"
            type="text"
            placeholder="Ваше имя"
            value={userName.value}
            onChange={userName.onChange}
          />
          <label htmlFor="user-name" className={styles.track__label}></label>
        </div>
        <div className={styles.track__item}>
          <textarea
            className={styles.track__input}
            name="comment"
            id="comment"
            cols={30}
            rows={10}
            placeholder="Ваш комментарий"
            value={commentText.value}
            onChange={commentText.onChange}
          />
          <label htmlFor="comment" className={styles.track__label}></label>
        </div>
        <button 
          type="submit"
          className={styles.track__submit}
          disabled={commentText.value === "" || userName.value === ""}
        >
            Отправить
        </button>
      </form>
      <ul className={styles.track__list}>
        {
          track.comments && (
            track.comments.map((comment, i) => (
              <li key={i} className={styles.track__comment}>
                <p className={styles.track__userName}>{`Пользователь: ${comment.username}`}</p>
                <p className={styles.track__commentText}>{comment.text}</p>
              </li>
            ))
          )
        }
      </ul>
    </section>
  </MainLayout>
  )
}

export default Track;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({params}) => {
  const response = await axios.get(`${BASE_URL_API}/tracks/` + params?.id)
  return {
      props: {
        serverTrack: response.data
      }
  }
});