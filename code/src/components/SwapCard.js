import React from "react"

//Trying to display a random image from an array. The image is not showing though
// const displayImage = () => {
//   let imagesArray = ["./assets/candy1.png", "./assets/candy.png", "./assets/candy3.png", "./assets/cotton-candy.png", "./assets/lollipop.png"]
//   let num = Math.floor(Math.random() * (imagesArray.length+1)); 
//   document.candy.src = imagesArray[num];
// }

const SwapCard = (props) => {
  return (
    <div className="card">
      <div className="title">
        <h1 className="swap-card-title">
          I'm looking for a swap-buddy!
        </h1>
      </div>
      <div className="information">
        <p>My name is: <span>{props.name}</span></p>
        <p>I'm coming from: <span>{props.country}</span></p>
        <p>I'm looking for a buddy in: <span>{props.region}</span></p>
        <p>My swap criteria is: <span>{props.amount}{props.unit}</span></p>
        <p>I have these allergies/preferences: <span>{props.allergies}</span></p>
        <p>Other information: <span>{props.other}</span></p>
      </div>
      {/* <div className="image-container">
        <img src={displayImage} name="candy" alt="A piece of candy"/>
      </div> */}
    </div>
  )
}

export default SwapCard