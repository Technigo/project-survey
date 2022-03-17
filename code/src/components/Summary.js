import React, { useState } from 'react'

import Name from './Name'
import Travel from './Travel'
import Location from './Location'

const Summary = ({name, travelWay, city}) => {
   return (
        <section className="question-container">
            <h3>Thanks for taking the time to help us, {name}!</h3>
            <p>We´ve registered that you attended our event in {city} and that
            you traveled {travelWay} to get there</p>
            
        </section>

    )
}

export default Summary