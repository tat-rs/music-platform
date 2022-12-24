import styles from "../styles/TrackProgress.module.scss";

interface TrackProgressProps {
  min: number,
  max: number,
  name: string,
  children?: React.ReactNode
}

function TrackProgress({children, name, min, max}: TrackProgressProps) {
  return (
    <div className={styles.progress}>
      {children}
      <label htmlFor={name} className={styles.progress__label}>
        <input
          className={styles.progress__label}
          id={name}
          name={name}
          type="range"
          min={min}
          max={max}
        />
      </label>
      <span className={styles.progress__info}>
        {`${min} / ${max}`}
      </span>
    </div>
  )
}

export default TrackProgress;
