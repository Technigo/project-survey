import React from 'react'
import emailjs from 'emailjs-com'

const Final = ({
  nameInput,
  emailInput,
  surfInput,
  clothingInput,
  travelInput,
  eventsInput,
  onNameInputChange,
  onEmailInputChange,
  onSurfInputChange,
  onClothingInputChange,
  onTravelInputChange,
  onEventsInputChange,
}) => {
  function sendEmail(email) {
    email.preventDefault()

    emailjs
      .sendForm(
        'service_8yjsskq',
        'template_vkmyufs',
        'form',
        'user_CLE2dCfZbNVh3CenFnpxS'
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <form className="form-none">
        <input
          name="name"
          onChange={onNameInputChange}
          value={nameInput}
        ></input>
        <input
          name="name"
          onChange={onEmailInputChange}
          value={emailInput}
        ></input>
        <input
          name="surfInput"
          value={surfInput}
          onChange={onSurfInputChange}
        ></input>
        <input
          name="clothingInput"
          value={clothingInput}
          onChange={onClothingInputChange}
        ></input>
        <input
          name="travelInput"
          value={travelInput}
          onChange={onTravelInputChange}
        ></input>
        <input
          name="eventsInput"
          value={eventsInput}
          onChange={onEventsInputChange}
        ></input>
      </form>
      <section className="submitted-container">
        <h2>Your added info below</h2>
        <h4>Full Name : {nameInput}</h4>
        <h4>Email : {emailInput}</h4>
        <h4>
          Prefered content :{surfInput ? 'Surf' : ''}
          {clothingInput ? 'Clothing' : ''}
          {travelInput ? 'Travel' : ''} {eventsInput ? 'Events' : ''}
        </h4>
      </section>{' '}
      <button className="btn6" type="submit" onClick={sendEmail}>
        {' '}
        Click here to finish{' '}
      </button>
    </>
  )
}

export default Final
