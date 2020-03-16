import React, {useState} from "react"
import {Form} from './Form'
import { Header } from './Header'



export const App = () => {
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true)
  }

  return (
     

    <article>
    <Header />
    <Form /> 
    
    </article>
  
  )
}
