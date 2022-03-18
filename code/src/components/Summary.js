import React from 'react'

const Summary = ({ ageGroup, options, expectations }) => {
    const reloadSurvey = () => window.location.reload()

    return (
       <section>
        <div className='summary-container'>
          <h2>Thanks for staying and welcome back<span role="img" aria-label='heart emoji'>❣️</span></h2>
          <p>Your age is {ageGroup}</p>
          <p>You stayed due to {options}</p>
          <p>You felt staying in the guesthouse was {expectations}</p>
          <div className='button-container'>
            <button className="button" onClick={reloadSurvey}>
              reload
            </button>
           </div> 
        </div>
       </section>
    )   
}

export default Summary
