import React from 'react'

const Start = ({ nextSlide }) => {

    return (
       <section>
        <div className='start-container'>
          <h2>Josefin's guesthouse</h2>
          <div className='button-container'>
            <p>please give us your feedback</p>
            <button className="button" onClick={nextSlide}>
            start survey
            </button>
          </div> 
        </div>
       </section> 
    )  
}

export default Start