import React, { useState } from 'react'
import "./components/submit.css"


export const Submit = () => {

    const [submit, setSubmit] = useState()

    return (
        <form>
            <button
                onClick={() => setSubmit(true)}
            >SUBMIT</button>

        </form>
    )
}

// export const Submit = (props) => {

//     return <div className="SummaryStyle">
//         {/* <p style={{ color: props.colour }}>Welcome {props.name}san! <br></br>You're now a part of the Turtle Ninja crew!
//         </p> */}
//         <p style={{ : props.colour }}>Your ninja colour: {props.colour}</p>
//         {/* <p style={{ color: props.colour }}>Your ninja weapon: {props.weapon}</p> */}
//     </div>
// };