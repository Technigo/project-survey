import React from 'react'
import emailjs from 'emailjs-com'

const Final = ({
  nameInput,
  emailInput,
  surfInput,
  clothingInput,
  travelInput,
  eventsInput,
  onEndSurvey,
}) => {
  function sendEmail() {
    // email.preventDefault()

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

  const handleButtonClick = (email) => {
    email.preventDefault()
    sendEmail()
    setTimeout(onEndSurvey, 5000)
  }

  return (
    <>
      <form className="form-none">
        <input name="name" defaultValue={nameInput}></input>
        <input name="emailInput" defaultValue={emailInput}></input>
        <input name="surfInput" defaultValue={surfInput ? 'Yes' : 'No'}></input>
        <input
          name="clothingInput"
          defaultValue={clothingInput ? 'Yes' : 'No'}
        ></input>
        <input
          name="travelInput"
          defaultValue={travelInput ? 'Yes' : 'No'}
        ></input>
        <input
          name="eventsInput"
          defaultValue={eventsInput ? 'Yes' : 'No'}
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
      <button className="btn6" type="submit" onClick={handleButtonClick}>
        {' '}
        Click here to finish{' '}
      </button>
    </>
  )
}

export default Final
