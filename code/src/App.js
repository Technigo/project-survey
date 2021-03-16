import React, { useState } from 'react'

import FirstQuestion from './components/FirstQuestion'

export const App = () => {
  const [submit, setSubmit] = useState(false)
  console.log(submit)

  return (
    <main className="survey">
      
      <div>
        <button type="submit" 
        onClick={() => setSubmit(true)}
        >START 
        </button>
      </div>

      {submit && (
        <div>
        <FirstQuestion />   
      </div>
      )}

    </main>
  )
}
