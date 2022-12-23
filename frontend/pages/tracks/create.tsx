import StepLayout from "../../layout/StepLayout"

function NewTrack() {
  return (
    <section>
      <h2>
        Загрузка нового трека
      </h2>
      <StepLayout activeStep={1}>
        <form></form>
      </StepLayout>
    </section>
  )
}

export default NewTrack