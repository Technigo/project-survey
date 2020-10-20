import React from "react";


// The componet dont know about App, js without props, like adding a argrument to a function.This is a function that is executed when all field are filld =true

// 2b destructuring way, extract the name from props variabel.
export const Summary = ( { name } ) => {
        return (
        <section>
        <h1> You are awsome {name}!</h1>
      </section>
        
        );
    };
    

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
