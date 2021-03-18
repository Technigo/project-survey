import React, { useState } from 'react'
import Start from 'components/Start'
import Questions from 'components/Questions'

export const App = () => {

  const [startQuestion, setStartQuestion] = useState(false)

  return (
    <div>
      {
        startQuestion === false ? (
          <Start onClickStart={setStartQuestion} />) :
          (
            <Questions />
          )
      }

    </div>
  )
}
