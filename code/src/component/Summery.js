import React from 'react'

export const Summery = ({ whenNext, answer }) => {
  const handleClick = (event) => {
    event.preventDefault();
    whenNext();
  }

  const userTypeChoice = answer[0];
  const userReservationName = answer[1];
  const userTimeChoice = answer[2];

  const timeInformation = 'Please arrive here at '
  const contactInformation = '08-123 45 67'

  return (
    <section>
      <h2>Summery</h2>
      <p>You want to: {userTypeChoice}</p>
      <p>Reservation name: {userReservationName}</p>

      <p>
        {userTimeChoice === "18:00" && `${timeInformation} 17:55`}
        {userTimeChoice === "19:00" && `${timeInformation} 18:55`}
        {userTimeChoice === "20:00" && `${timeInformation} 19:55`}
        {userTimeChoice === "other" && `Please calls us at ${contactInformation}`}
      </p>

      <button type="submit" className="formBtn" onClick={handleClick}> Restart </button>
    </section>
  )
}