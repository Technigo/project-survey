import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))

/*const App = () => {
    const [temperature, setTemperature] = useState(20);
  
    return (
      <div>
  
  
      <h1>Current temp> {temperature} degrees </h1>
      
      <button onClick={() => setTemperature(-5)}>Freeze!</button>
  
      {temperature > 100 && <p>Steamy!</p>}
      </div>
    );
  };*/