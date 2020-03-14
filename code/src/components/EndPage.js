import React from 'react'
import {Form, values, Bar} from 'components/Form'

export const EndPage = (props) => {
    
    return (
        <section className ="myForm">
            <h1>Goodbye</h1>
    <p> your name is: {props.name}</p>
    <p> Your age group is: {props.age}</p>
    <p> your city is: {props.city}</p>
    <Bar size = "100"/>
        </section>
    )
}


{/* <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
      </form>
      {done && <EndPage name={values[2]} age ={values[1]} city={values[0]}  */}