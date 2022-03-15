import React, { useState } from 'react'

// import Name from './Name'
// import Travel from './Travel'
// import Location from './Location'

const Summary = ({name, travelWay, city}) => {
   return (
        <section>
            <p>name: {name} </p>
            <p>city: {city} </p>
            <p>how to travel: {travelWay} </p>
            <button type="button">Submit answers</button>
        </section>

    )
}

export default Summary