import { ITrackItem } from "../types/types";
import TrackItem from "./TrackItem";
import styles from "../styles/TrackList.module.scss";
import Link from "next/link";

interface TrackListProps {
  tracks: ITrackItem[],
}

export default function TrackList({tracks}: TrackListProps) {
  return (
    <section className={styles.tracks}>
      <div className={styles.tracks__heading}>
        <h2 className={styles.tracks__title}>Список треков</h2>
        <Link href="/tracks/create" className={styles.tracks__button}>Загрузить</Link>
      </div>
      <ul className={styles.tracks__list}>
        {
          tracks && tracks.map((track) => (
            <li key={track._id} className={styles.tracks__item}>
              <TrackItem track={track} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}