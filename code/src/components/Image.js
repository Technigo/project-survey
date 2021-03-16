import React, {useState} from 'react'


const ImageSelect = (image) => {
    console.log(image)

    return (
         <img className="teste2" src={image.image} />
        )
}

export default ImageSelect