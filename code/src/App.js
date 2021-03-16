import React from 'react'
import './App.css'

import Form  from './Form'
import Header from './components/Header'

const App = () => {
  return (
    <div className='app-container'>
        <div>
          < Header />
        </div>
        <div>
          < Form />
        </div>
    </div>
  )
}

export default App;