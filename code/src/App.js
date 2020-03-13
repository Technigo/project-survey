import React, { useState } from 'react'
import { Form } from './components/Form'
import { EndPage } from './components/EndPage'



export const App = () => {
  const [page, setPage] = useState("page1")



  return (
    <div className="box">

         <Form />
          </div>
  )
}

