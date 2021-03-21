import React from 'react'

const ImageContainer = ({pictureOne, pictureTwo}) => {
  return (
    <div className="image-container"> 
        <img src={`./assets/${pictureOne}.svg`} className="image" alt={pictureOne}/>
        <img src={`./assets/${pictureTwo}.svg`}  className="image" alt={pictureTwo}/>
      </div>

  )
}
export default ImageContainer