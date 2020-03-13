import React, { useState } from 'react'
import { Radio, Select, Text, values } from './components/Form'
import { EndPage } from './components/EndPage'

const handleSubmit = (evt) => {
  evt.preventDefault()
}

const myValues = ["", "", ""]

export const App = () => {
  const [page, setPage] = useState("page1")



  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        {(page === "page1") && <myFunction />}
        <button type="submit" className="btn" onClick={() => setPage("page2")}>Submit answers</button>
      </form>


      {(page === "page2") && <EndPage name={myValues[2]} age={myValues[1]} city={myValues[0]} />}



      {/* <button onClick>Change Page</button>
      {section === 'firstQuestion' && <Form />}

      {section === 'secondQuestion' && <EndPage name={values[2]} age={values[1]} city={values[0]} />} */}
    </div>
  )
}
export const myFunction = () => {
  myValues = values
  return (
    <>
      <h1>I love you</h1>
      < Select />
      < Radio />
      < Text />

    </>
  )
}
