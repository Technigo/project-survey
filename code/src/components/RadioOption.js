// import React from 'react';
// import QuestionThree from 'QuestionThree'

// // const flowers = ['rose', 'tulip', 'orchid']



// const RadioOption = ({ flower, setFlower, item }) => {

//     const onFlowerChange = (event) => {
//         setFlower(event.target.value)
//     }

//     return (
//         <>
//             {/* <div>
//                 <h2>Third Question</h2>
//                 <p>What's your favorite flower</p>
//             </div>

//             <div>
//                  {flowers.map((item) => {
//                     return (
//                         <QuestionThree
//                             flower={flower}
//                             setFlower={setFlower}
//                             item={item}
//                         />
//                     )
//                 })}
//             </div> */}

//             <label key={item} htmlFor={item}>{item}</label>
//                 <input 
//                     name="flower" 
//                     id={flower} 
//                     type="radio" 
//                     value={item}
//                     onChange={onFlowerChange}
//                     checked={flower === item }  
//                 /> 
//         </>
//     )

// }

// export default RadioOption;