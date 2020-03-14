import React from 'react'
import {Form, values} from 'components/Form'

export const EndPage = (props) => {

    return (
        <section>
            <h1>Goodbye</h1>
    <p>{props.name}</p>
    <p>{props.age}</p>
    <p>{props.city}</p>
        </section>
    )
}


{/* <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
      </form>
      {done && <EndPage name={values[2]} age ={values[1]} city={values[0]}  */}