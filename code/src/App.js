import React from 'react'

import Form from './components/Form'
import ImageContainer from './components/ImageContainer'

const picturesArray = ["Sunny Beach", "Camping", "Suitcases", "Paris"]

export const App = () => {
  return (
    <div className="content-wrapper">
      <ImageContainer 
        pictureOne={picturesArray[0]} 
        pictureTwo={picturesArray[1]}
      />
      <Form />
      <ImageContainer 
        pictureOne={picturesArray[2]} 
        pictureTwo={picturesArray[3]}
      />
    </div>
  )
}
