import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import FormAddCover from "../../components/FormAddCover";
import FormAddTrack from "../../components/FormAddTrack";
import FormInfoTrack from "../../components/FormInfoTrack";
import { useAppDispatch } from "../../hooks/hooks";
import { useInput } from "../../hooks/useInput";
import StepLayout from "../../layout/StepLayout";
import styles from "../../styles/NewTrack.module.scss";
import { BASE_URL_API } from "../../utils/constants";

function NewTrack() {
  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = useState<number>(1);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const [picture, setPicture] = useState<File | string>('fileurl');
  const [audio, setAudio] = useState<File | string>('fileurl');
  const router = useRouter();

  function next() {
    setActiveStep(state => state + 1)
  }

  function back() {
    setActiveStep(state => state - 1)
  }

  function changePicture(evt: React.ChangeEvent<HTMLInputElement>) {
    if (!evt.target.files || evt.target.files.length === 0) {
      // you can display the error to the user
      console.error("Select a file");
      return;
    }
    setPicture(evt.target.files[0])
  }

  function changeAudio(evt: React.ChangeEvent<HTMLInputElement>) {
    if (!evt.target.files || evt.target.files.length === 0) {
      // you can display the error to the user
      console.error("Select a file");
      return;
    }
    setAudio(evt.target.files[0])
  }

  function onSubmit(evt: React.ChangeEvent<HTMLFormElement>) {
    evt.preventDefault();
    const myForm = new FormData();
    myForm.append('name', name.value);
    myForm.append('text', text.value);
    myForm.append('artist', artist.value);
    myForm.append('picture', picture);
    myForm.append('audio', audio);
    axios.post(`${BASE_URL_API}/tracks`, myForm);
    router.push('/tracks')
  }

  return (
    <section className={styles.newTrack}>
      <h2 className={styles.newTrack__title}>
        Загрузка нового трека
      </h2>
      <StepLayout activeStep={activeStep} next={next} back={back}>
        <form id="addTrack" name='addTrack' className={styles.newTrack__form} onSubmit={onSubmit}>
          {
            activeStep === 1 && <FormInfoTrack name={name} artist={artist} text={text} />
          }
          {
            activeStep === 2 && <FormAddCover changePicture={(evt: React.ChangeEvent<HTMLInputElement> ) => changePicture(evt)} />
          }
          {
            activeStep === 3 && (
              <>
                <FormAddTrack changeAudio={(evt: React.ChangeEvent<HTMLInputElement> ) => changeAudio(evt)} />
                <button className={styles.newTrack__submit} type="submit">Сохранть трек</button>
              </>
            )
          }
        </form>
        
      </StepLayout>
    </section>
  )
}

export default NewTrack