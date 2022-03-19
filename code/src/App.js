import React from 'react'
import Form from './components/Form'
//import Radio from './components/Radio'

 export const App = () => {
  return (
    <div>
      <p>Welcome to this survey about our modern workplace.      
      </p>
      <Form/>
    </div>
  )
}




//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

//to prevent the default behaviour with rerendering of page when typed name and hit enter:
//<form onSubmit={(event) => event.preventDefault ()}
