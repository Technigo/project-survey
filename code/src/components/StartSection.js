import React from 'react'

export const StartSection = ({onStartClick}) => {

  return (
    <section className='intro-text'>
      
      <h1 tabIndex='0'>WHAT'S YOUR SPIRIT ANIMAL?</h1>
      <p tabIndex='0'>Answer three simple questions and find out!</p>
      <button onClick={onStartClick}>Start the test</button>

      <div className='image-animation-container'>
        <img alt='snake' src='./images/snake.svg'></img>
        <img alt='fox' src='./images/fox.svg'></img>
        <img alt='hippo' src='./images/hippo.svg'></img>
        <img alt='rabbit' src='./images/rabbit.svg'></img>
      </div>

    </section>
  )

}