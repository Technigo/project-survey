import React from 'react'

const Start = ({ nextSlide }) => {

    return (
       <section>
        <div className='form-container'>
          <h2>Your stay at Josefin's guesthouse</h2>
          <p>please give us your feedback</p>
           <div className='button-container'>
              <button className="button" onClick={nextSlide}>
              start survey
              </button>
           </div>
        </div>
       </section> 
    )  
}

export default Start