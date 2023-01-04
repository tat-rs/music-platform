import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ITrackItem } from "../types/types";
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
import DeleteIcon from "../assets/delete.svg";
import styles from "../styles/TrackItem.module.scss";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { pause, play, setActive } from "../store/player/playerSlice";
import { BASE_URL_API } from "../utils/constants";
import { deleteTracks } from "../store/tracks/thunk";

interface TrackItemProps {
  track: ITrackItem,
  setTracksList: () => void
}

export default function TrackItem({track, setTracksList}: TrackItemProps) {
  const router = useRouter();
  const { active, isPaused } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();
  let icon;

  function playTrack(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.stopPropagation();
    if(active?._id !== track._id) {
      dispatch(setActive(track));
    } else {
      if(isPaused) {
        dispatch(play());
      } else {
        dispatch(pause());
      }
    }
  }

  async function deleteTrack(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.stopPropagation();
    await dispatch(deleteTracks(track._id))
  }

  if(!active || active?._id !== track._id) {
    icon = <PlayIcon width="28" height="28"/>
  } else if(active?._id === track._id && isPaused) {
    icon = <PlayIcon width="28" height="28"/>
  } else if(active?._id === track._id && !isPaused) {
    icon = <PauseIcon width="28" height="28" />
  }

  return (
    <li className={styles.track} onClick={() => router.push(`tracks/${track._id}`)}>
      <div className={styles.track__main}>
        <button type="button" className={styles.track__button} onClick={(evt) => playTrack(evt)}>
          {icon}
        </button>
        <Image
            src={`${BASE_URL_API}/${track.picture}`}
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
      <button className={styles.track__delete} type="button" onClick={(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => deleteTrack(evt)}>
        <DeleteIcon width="18" height="18"/>
      </button>
        
    </li>
  )
}