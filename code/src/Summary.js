import React from "react";

// The componet dont know about App, js without props, like adding a argrument to a function.This is a function that is executed when all field are filld =true

// 2b destructuring way, extract the name from props variabel.
export const Summary = ({ name, like, whereBuy}) => {
  return (
    <div>            
        <div>
            <h1> Chezzes,{name}! 
            So you {like}cheese and often 
            {whereBuy}! Thank you for answering this cheesy survey, 
            have a geat day! </h1>
            </div>
           
      
    {/* <button id="resetBtn" tabindex="0" type="button" onClick={window.location.reload()}>Again</button> */}
    </div>
  
  );
};



// const Summary = ({ userName, userCity, userColors }) => {

//     return (
//      
//     );
// }





// 2a destructuring way, extract the name from props variabel.

// export const Summary = (props) => {
//     const{ name } = props;

//         return (
//         <section>
//         <h1> Hej {props.name}!</h1>
//       </section>

//         );
//     };

// 1. sätt att göra detta med props:
//export const Summary = (props) => {
//     return (
//     <section>
//     <h1> Hej {props.name}!</h1>
//   </section>

//     );
// };
