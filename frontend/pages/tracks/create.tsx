import { useRouter } from "next/router";
import React, { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import StepLayout from "../../layout/StepLayout";
import FormAddCover from "../../components/FormAddCover";
import FormAddTrack from "../../components/FormAddTrack";
import FormInfoTrack from "../../components/FormInfoTrack";
import { useAppDispatch } from "../../hooks/hooks";
import { useInput } from "../../hooks/useInput";
import { postTracks } from "../../store/tracks/thunk";
import styles from "../../styles/NewTrack.module.scss";

function NewTrack() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isValid, setIsValid] = useState(false);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const [picture, setPicture] = useState<File | string>('');
  const [audio, setAudio] = useState<File | string>('');
  const router = useRouter();
  const dispatch = useAppDispatch();

  function next() {
    setActiveStep(state => state + 1)
  }

  function back() {
    setActiveStep(state => state - 1)
  }

  function changePicture(evt: React.ChangeEvent<HTMLInputElement>) {
    if (!evt.target.files || evt.target.files.length === 0) {
      setIsValid(false);
      return;
    }
    setPicture(evt.target.files[0]);
    setIsValid(true);
  }

  function changeAudio(evt: React.ChangeEvent<HTMLInputElement>) {
    if (!evt.target.files || evt.target.files.length === 0) {
      setIsValid(false);
      return;
    }
    setAudio(evt.target.files[0]);
    setIsValid(true);
  }

  async function onSubmit(evt: React.ChangeEvent<HTMLFormElement>) {
    evt.preventDefault();
    const myForm = new FormData();
    myForm.append('name', name.value);
    myForm.append('text', text.value);
    myForm.append('artist', artist.value);
    myForm.append('picture', picture);
    myForm.append('audio', audio);
    await dispatch(postTracks(myForm))
    router.push('/tracks');
  }

  return (
    <MainLayout>
      <section className={styles.newTrack}>
      <h2 className={styles.newTrack__title}>
        Загрузка нового трека
      </h2>
      <StepLayout activeStep={activeStep} next={next} back={back} isValid={isValid}>
        <form id="addTrack" name='addTrack' className={styles.newTrack__form} onSubmit={onSubmit}>
          {
            activeStep === 1 && (
              <FormInfoTrack
                name={name}
                artist={artist}
                text={text}
                setIsValid={setIsValid} />
            )
          }
          {
            activeStep === 2 && (
              <FormAddCover
                picture={picture}
                changePicture={changePicture}
                isValid={isValid}
                setIsValid={setIsValid} />
              )
          }
          {
            activeStep === 3 && (
              <>
                <FormAddTrack
                  audio={audio}
                  changeAudio={changeAudio}
                  isValid={isValid}
                  setIsValid={setIsValid} />
                {
                  isValid && (
                    <button className={styles.newTrack__submit} type="submit">Сохранить трек</button>
                  )
                }
              </>
            )
          }
        </form>
      </StepLayout>
    </section>
  </MainLayout>
  )
}

export default NewTrack