import React from 'react'

const Intro = ({ nextPage }) => {

return (

    <div>
            
        <div className="header-title">
            <h1 className="hello">Hey you! </h1> 
            <p>Would you like to subscribe to our newsletter?</p>

            <button className="btn" onClick={nextPage}> Very much yes </button>
        </div>
        

    </div>
    
    )

}

export default Intro