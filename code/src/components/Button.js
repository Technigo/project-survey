import React from 'react'

export const Button = ({ button, click, disable, text }) => {
  return (

    <button type={button} onClick={click} disable={disable}>{text}</button>
  )
}
// import React from 'react'

// // export const Button = ({ button, click, disable, text }) => {
// //   return (

// //     <button type={button} onClick={click} disable={disable}>{text}</button>
// //   )
// // }

// export const Button = ({ type, click, disable, text }) => {
//   return (
//     <input type={type} onChange={click} disable={disable} value={text} />
//   )
// }




