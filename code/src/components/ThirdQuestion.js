import React, { useState } from 'react'
import './thirdQuestion.css'

const optionList = ["0-5 hours", "5-8 hours", "more than 8 hours"]

export const ThirdQuestion = () => {
    const [hour, setOptionsList] = useState("false")

    return (
        <section className="third-question" id="hours">
            <form>
                <h1 tabIndex="0">How many hours of sleep have you had today?</h1>
                <h2 tabIndex="0">It is okay to feel you need more rest.</h2>
                <div className="radio-buttons">
                    {optionList.map((hours) => (
                        <label tabIndex="0" key={hours}>
                            <input
                                type="radio"
                                value={hours}
                                className="radio-button"
                                required
                                onChange={event => setOptionsList(event.target.value)}
                                checked={hour === hours}
                                id="sleepOption"

                            />
                            {hours}
                            <p></p>
                        </label>
                    ))}

                    {/* {sleep === "0-5 hours" && <p>Remember that proper sleep rejuvenates the soul.</p>} */}
                </div>
                <button><a href="#activity">continue</a></button>
            </form>

        </section>
    )
}




// import React, { useState } from 'react'
// import './thirdQuestion.css'

// export const ThirdQuestion = () => {
//     const [sleep, setSleep] = useState("")
//     const sleepOptions = ["0-5 hours", "5-8 hours", "more than 8 hours"]

//     return (
//         <section className="third-question" id="third">
//             <h1>How many hours of sleep have you had today?</h1>
//             <h2>It is okay to feel you need a few hours more.</h2>
//             <div className="radio-buttons">
//                 {sleepOptions.map(sleepOption => (

//                 ))}
//                 <label key={sleepOption}>
//                     <input
//                         type="radio"
//                         value="0-5 hours"
//                         className="radio-button"
//                         onChange={event => setSleep(event.target.value)}
//                         checked={sleep === "0-5 hours"}
//                     />
//                     <p>0-5 hours</p>
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         value="5-8 hours"
//                         className="radio-button"
//                         onChange={event => setSleep(event.target.value)}
//                         checked={sleep === "5-8 hours"}
//                     />
//                     <p>5-8 hours</p>
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         value="more than 8 hours"
//                         className="radio-button"
//                         onChange={event => setSleep(event.target.value)}
//                         checked={sleep === "more than 8 hours"}
//                     />
//                     <p> more than 8 hours</p>
//                 </label>
//                 {/* {sleep === "0-5 hours" && <p>Remember that proper sleep rejuvenates the soul.</p>} */}
//             </div>
//             <button><a href="#fourth">continue</a></button>

//         </section>
//     )
// }