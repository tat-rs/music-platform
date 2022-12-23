import styles from "../styles/StepLayout.module.scss";

interface StepLayoutProps {
  activeStep: number,
  children: React.ReactNode,
}

function StepLayout({activeStep, children}: StepLayoutProps) {

  const steps = ['Информация о треке', 'Загрузка обложки', 'Загрузка трека'];

  return (
    <div className={styles.stepper}>
      <ul className={styles.stepper__list}>
        {
          steps.map((step, index) => (
            <li key={index} className={styles.stepper__item}>
              <span className={styles.stepper__count}>{index + 1}</span>
              <h3 className={styles.stepper__title}>{step}</h3>
            </li>
          ))
        }
      </ul>
      {children}
    </div>
  )
}

export default StepLayout
