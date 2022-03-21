import React from 'react'
import Form from './components/Form'






 export const App = () => {
  //const [days, setDays] = useState('');
  return (
    <div className="container">
      <h1>Welcome to this survey about our modern workplace. </h1>
      <Form/>
    </div>
  )
}




//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);

//to prevent the default behaviour with rerendering of page when typed name and hit enter:
//<form onSubmit={(event) => event.preventDefault ()}
