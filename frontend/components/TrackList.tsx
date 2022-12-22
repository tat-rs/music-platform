import { ITrackItem } from "../types/types";
import TrackItem from "./TrackItem";
import styles from "../styles/TrackList.module.scss";
import LinkElement from "./Link";

interface TrackListProps {
  tracks: ITrackItem[],
}

export default function TrackList({tracks}: TrackListProps) {
  return (
    <section className={styles.tracks}>
      <div className={styles.tracks__heading}>
        <h2 className={styles.tracks__title}>Список треков</h2>
        <LinkElement link="/tracks/create" text="Загрузить" />
      </div>
      <ul className={styles.tracks__list}>
        {
          tracks && tracks.map((track) => (
            <TrackItem track={track} key={track._id} />
          ))
        }
      </ul>
    </section>
  )
}