import React from 'react'

// import {Counter} from 'components/Counter'
// import {Infobanner} from 'components/Infobanner'

// Imported Components
import Form from 'components/Form'
import Header from 'components/Header'



export const App = () => {
  // const [temperature, setTemperature] = useState(20);
  // const [wantsNewsletter, setWantsNewsletter] = useState(false)
  // const [counter, setCounter] = useState(0)

  return (
    <body>
      <header>
        <Header/>
      </header>
      <main>
        <Form/>
      </main>
    </body>
  )
}
