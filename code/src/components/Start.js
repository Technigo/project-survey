import React from 'react'

const Start = ({ nextSlide }) => {

    return (
       <section>
        <div className='start-container'>
          <h2>Your stay at Josefin's guesthouse</h2>
            <p>please give us your feedback</p>
            <button className="button" onClick={nextSlide}>
            start survey
            </button>
        </div>
       </section> 
    )  
}

export default Start