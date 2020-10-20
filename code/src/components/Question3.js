import React from 'react'

export const Question3 = (props) => {

  return (
    <section>
      <p>{props.question}</p>
      <input type="radio" id="yes" name="answer"></input>
      <label for="yes">YES</label>
      <input type="radio" id="no" name="answer"></input>
      <label for="no">NO</label>
    </section>
  )

}

export default Question3;