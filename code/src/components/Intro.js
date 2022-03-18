import React from 'react'

const Intro = ({ nextPage }) => {

return (

    <div>
            
        <div className="header-title">



            
            <h1>There you are!</h1> 
            <p>So happy to see you here.</p>
            <p>Would you like to subscribe to our newsletter?</p>

            <button className="btn" onClick={nextPage}> Very much yes </button>
        </div>
        

    </div>
    
    )

}

export default Intro