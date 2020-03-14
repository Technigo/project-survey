import React from 'react'
import {Form, values} from 'components/Form'

export const EndPage = (props) => {
    
    return (
        <section className ="myForm">
               <div className = "bar">
        <div className = "filled" style={{ width: '100%' }}></div>
        </div>
            <h1>Goodbye</h1>
    <p> your name is: {props.name}</p>
    <p> Your age group is: {props.age}</p>
    <p> your city is: {props.city}</p>
        </section>
    )
}


{/* <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
      </form>
      {done && <EndPage name={values[2]} age ={values[1]} city={values[0]}  */}