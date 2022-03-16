import React from "react"

import Start from "components/Start"

const App = () => {

  return (
    <main>
      <div className="app-wrapper">
        <h1>Libertas Book Club</h1>
        <div className="app-container-bg-pattern">
          <img className="bg-img" src="./images/bg.svg" alt="background"/>
           <Start />
        </div>
      </div>
    </main>
  )
}

export default App
