import { useState } from "react";
import FormAddCover from "../../components/FormAddCover";
import FormAddTrack from "../../components/FormAddTrack";
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
      <StepLayout activeStep={activeStep} next={next} back={back}>
        {
          activeStep === 1 && <FormInfoTrack />
        }
        {
          activeStep === 2 && <FormAddCover />
        }
        {
          activeStep === 3 && <FormAddTrack/>
        }
        
      </StepLayout>
    </section>
  )
}

export default NewTrack