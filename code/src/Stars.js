import React, { useState } from "react";
// import Rater from "react-rater"
import  Rating from 'react-native-easy-rating'

export const Stars = () => {
return (
<Rating
    rating={1}
    max={5}
    iconWidth={24}
    iconHeight={24}
    iconSelected={require('../../img/icon_star_selected.png')}
    iconUnselected={require('../Stars')}
    onRate={(rating) => this.setState({rating: rating})}/>
    )
    }

// export const Rating = () => {
//   const [rate, setRate] = useState("");
//   return (
    
//     <Rater 
//     rating={0} 
//     total={5} 
//     checked={rate}
//     onRate={event => setRate(event.target.value)}
//     interactive={false} />
//     // <Rater onRate={({setRate}) => {}}/>
//   )
// }
