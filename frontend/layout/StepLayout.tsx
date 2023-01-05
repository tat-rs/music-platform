import classNames from "classnames";
import { steps } from "../utils/constants";
import styles from "../styles/StepLayout.module.scss";

interface StepLayoutProps {
  activeStep: number,
  next: () => void,
  back: () => void,
  children: React.ReactNode,
}

function StepLayout({activeStep, next, back, children}: StepLayoutProps) {

  return (
    <div className={styles.stepper}>
      <ul className={styles.stepper__list}>
        {
          steps.map((step, index) => (
            <li key={index} className={styles.stepper__item}>
              <span className={classNames(styles.stepper__count,{
                [styles.stepper__count_disabled]: activeStep !== index + 1
              })}>{index + 1}</span>
              <h3 className={classNames(styles.stepper__title,{
                [styles.stepper__title_disabled]: activeStep !== index + 1
              })}>{step}</h3>
            </li>
          ))
        }
      </ul>
      <div className={styles.stepper__container}>
      <div className={styles.stepper__buttons}>
        <button
          className={styles.stepper__button}
          onClick={() => back()}
          disabled={activeStep === 1}
        >
          Назад
        </button>
        <button
          className={styles.stepper__button}
          onClick={() => next()}
          disabled={activeStep === 3}
        >
          Далее
        </button>
      </div>
        {children}
      </div>
    </div>
  )
}

export default StepLayout
