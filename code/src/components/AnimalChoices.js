import React from 'react'

const AnimalChoices = ({animalInput}) => {
   
    if ( animalInput === "Penguin" ) {
        return (
            <img src="/assets/penguin.png" alt = "penguin icon"></img>
        )
    } else if (animalInput === "Shark") {
        return (
            <img src="/assets/shark.png" alt = "shark icon"></img>
        )

    } else if (animalInput === "Dolphin") {
        return (
            <img src ="/assets/dolphin.png" alt = "dolphin icon"></img>
        )
    } else if (animalInput === "Koala") {
        return (
            <img src ="/assets/koalas.png" alt = "Koala icon"></img>
        )
    }  else if (animalInput === "Unicorn") {
        return (
            <img src="/assets/unicorn.png" alt = "Unicorn icon"></img>
        )
    } else if (animalInput === "Tiger") {
        return (
            <img src="/assets/tiger.png" alt = "Tiger icon"></img>
        )
    }
    else {
        return (
            <img></img>
        )
    } 
    
    }



export default AnimalChoices