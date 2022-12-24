import { useState } from "react";
import FormAddCover from "../../components/FormAddCover";
import FormInfoTrack from "../../components/FormInfoTrack";
import StepLayout from "../../layout/StepLayout";
import styles from "../../styles/NewTrack.module.scss";

function NewTrack() {
  const [activeStep, setActiveStep] = useState<number>(1);

  function next() {
    setActiveStep(state => state + 1)
  }

  function back() {
    setActiveStep(state => state - 1)
  }

  return (
    <section className={styles.newTrack}>
      <h2 className={styles.newTrack__title}>
        Загрузка нового трека
      </h2>
      <StepLayout activeStep={activeStep}>
        {
          activeStep === 1 && <FormInfoTrack />
        }
        {
          activeStep === 2 && <FormAddCover />
        }
        {
          activeStep === 3 && <FormInfoTrack/>
        }
        
      </StepLayout>
      <div className={styles.newTrack__buttons}>
        <button
          className={styles.newTrack__button}
          onClick={() => back()}
          disabled={activeStep === 1}
        >
          Назад
        </button>
        <button
          className={styles.newTrack__button}
          onClick={() => next()}
          disabled={activeStep === 3}
        >
          Далее
        </button>
      </div>
    </section>
  )
}

export default NewTrack