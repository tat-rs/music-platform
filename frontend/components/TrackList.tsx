import { useState } from "react";
import TrackItem from "./TrackItem";
import LinkElement from "./Link";
import { ITrackItem } from "../types/types";
import styles from "../styles/TrackList.module.scss";

interface TrackListProps {
  tracks: ITrackItem[],
}

export default function TrackList({tracks}: TrackListProps) {
  const [tracksList, setTracksList] = useState(tracks || [])
  return (
    <section className={styles.tracks}>
      <div className={styles.tracks__heading}>
        <h2 className={styles.tracks__title}>Список треков</h2>
        <LinkElement link="/tracks/create" text="Загрузить" />
      </div>
      <ul className={styles.tracks__list}>
        {
          tracksList && tracksList.map((track) => (
            <TrackItem track={track} key={track._id} />
          ))
        }
      </ul>
    </section>
  )
}