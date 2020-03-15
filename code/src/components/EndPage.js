import React from 'react'
import { Bar} from 'components/Form'

export const EndPage = (props) => {

 
    return (
        <section className ="myForm">
            <h1>Thank You</h1>
            <div className = "result">
    <p> Your name is: </p><p>{props.name}</p>
    <p> The appartment size is: </p><p>{props.room}</p>
    <p>Parking: </p>
    {props.parking &&  <p>With Parking</p>}
    {(props.parking === false) && <p>No parking</p> }
    <p> Your city is: </p><p>{props.city}</p>
    </div>
    <Bar size = "100"/>
        </section>
    )
}



{/* <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
      </form>
      {done && <EndPage name={values[2]} age ={values[1]} city={values[0]}  */}