import React from "react";
import VolumeIcon from "../assets/volume.svg";
import { convertTime } from "../utils/convertTime";
import styles from "../styles/TrackProgress.module.scss";

interface TrackProgressProps {
  left: number,
  right: number,
  name: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

function TrackProgress({name, left, right, onChange}: TrackProgressProps) {

  return (
    <div className={styles.progress}>
      {name === 'volume' && (
        <VolumeIcon width="25" height="25" />
      )}
      <label htmlFor={name} className={styles.progress__label}>
        <input
          className={styles.progress__label}
          id={name}
          name={name}
          type="range"
          min={0}
          max={right}
          value={left}
          onChange={onChange}
        />
      </label>
      <span className={styles.progress__info}>
        {
          name === "duration" ? (
            `${convertTime(left)}/${convertTime(right)}`
          ) : `${left} / ${right}`
        }
      </span>
    </div>
  )
}

export default TrackProgress;
