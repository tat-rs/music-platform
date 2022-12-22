import Image from "next/image";
import { ITrackItem } from "../types/types";
import PlayIcon from "../assets/play.svg";
import styles from "../styles/TrackItem.module.scss";
import { useRouter } from "next/router";

interface TrackItemProps {
  track: ITrackItem
}

export default function TrackItem({track}: TrackItemProps) {
  const router = useRouter();

  return (
    <li className={styles.track} onClick={() => router.push(`tracks/${track._id}`)}>
      <div className={styles.track__main}>
        <button type="button" className={styles.track__button}>
          <PlayIcon />
        </button>
        <Image
            src={track.picture}
            alt={track.name}
            width={70}
            height={60}
            className={styles.track__image}
        />
        <div className={styles.track__container}>
          <h3 className={styles.track__title}>{track.name}</h3>
          <p className={styles.track__artist}>{track.artist}</p>
        </div>
      </div>
      <p className={styles.track__direction}>00:00/00:00</p>
    </li>
  )
}