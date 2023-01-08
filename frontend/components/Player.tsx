import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import TrackProgress from "./TrackProgress";
import { BASE_URL_API } from "../utils/constants";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { play, pause, setVolume, setDuration, setCurrentTime } from "../store/player/playerSlice";
import PlayIcon from "../assets/play.svg";
import PauseIcon from "../assets/pause.svg";
import styles from ".././styles/Player.module.scss";

let audio: HTMLAudioElement;

function Player() {
  const { active, volume, duration, currentTime, isPaused } = useAppSelector((state) => state.player);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(active) {
      setAudio();
      playTrack();
    }
  }, [active]);

  useEffect(() => {
    if(!audio) {
      audio = new Audio();
    }
  }, [])
  
  useEffect(() => {
    if(active && audio && audio.currentTime === audio.duration) {
      dispatch(pause());
    } 
  }, [currentTime]);

  function setAudio() {
    if(active) {
      audio.src = `${BASE_URL_API}/${active.audio}`;
      audio.volume = volume / 100;
      audio.onloadeddata = () => {
        dispatch(setDuration(audio.duration));
      }
      audio.ontimeupdate = () => {
        dispatch(setCurrentTime(audio.currentTime));
      }
    }
  }

  function playTrack() {
    if(isPaused) {
      dispatch(play());
      audio.play();
    } else {
      dispatch(pause());
      audio.pause();
    }
  }

  const changeVolume = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(evt.target.value) / 100;
    dispatch(setVolume(Number(evt.target.value)));
  }, []);

  const changeDuration = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(evt.target.value);
    dispatch(setCurrentTime(Number(evt.target.value)));
  }, []);

  if(!active) {
    return null
  }

  return (
    <div className={styles.player}>
      <div className={styles.player__container}>
      <button
        type="button"
        className={styles.player__button}
        onClick={() => playTrack()}
        >
          {
            isPaused ? (
              <PlayIcon width="18" height="18" />
            ) : (
              <PauseIcon width="18" height="18" />
            )
          }
      </button>
        <Image
            src={`${BASE_URL_API}/${active?.picture}`}
            alt={active?.name}
            width={40}
            height={40}
            className={styles.player__image}
        />
      <div className={styles.player__info}>
          <h3 className={styles.player__title}>{active?.name}</h3>
          <p className={styles.player__artist}>{active?.artist}</p>
        </div>
      </div>
      <TrackProgress name="duration" left={currentTime} right={duration} onChange={changeDuration} />
      <TrackProgress name="volume" left={volume} right={100} onChange={changeVolume} />
    </div>
  )
}

export default Player;
