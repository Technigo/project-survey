import React, {useState} from 'react'
import Radio from './Radio'


const ImageSelect = (GroupValue) => {
    const images = ["./assets/jacket2.jpg","./assets/jacket3.jpg","./assets/jacket4.jpg"]

    const trying = {GroupValue,images}
    console.log(trying)

    return (
         <img className="teste2" src={GroupValue.images} />

        )

}

export default ImageSelect