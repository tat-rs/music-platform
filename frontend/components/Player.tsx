import Image from "next/image";
import styles from ".././styles/Player.module.scss";
import PlayIcon from "../assets/play.svg";
import VolumeIcon from "../assets/volume.svg";
import TrackProgress from "./TrackProgress";

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

function Player() {
  return (
    <div className={styles.player}>
      <div className={styles.player__container}>
      <button type="button" className={styles.player__button}>
          <PlayIcon width="18" height="18" />
      </button>
        <Image
            src={track.picture}
            alt={track.name}
            width={40}
            height={40}
            className={styles.player__image}
        />
      <div className={styles.player__info}>
          <h3 className={styles.player__title}>{track.name}</h3>
          <p className={styles.player__artist}>{track.artist}</p>
        </div>
      </div>
      <TrackProgress name="direction" min={0} max={100} />
      <TrackProgress name="volume" min={0} max={100} >
        <VolumeIcon width="25" height="25" />
      </TrackProgress>
    </div>
  )
}

export default Player;
