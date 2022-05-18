import React from "react"

import Start from "components/Start"
import Footer from "components/Footer"

const App = () => {

  return (
    <main>
      <div className="app-wrapper">
        <img className="main-logo" src="./images/logo.svg" alt="libertas book club"/>
           <Start />
           <Footer />
      </div>
    </main>
  )
}

export default App
