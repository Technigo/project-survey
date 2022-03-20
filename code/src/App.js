import React from 'react'
import CalculationForm from 'components/CalculationForm'

// import UserForm from './components/UserForm' 

export const App = () => {
  return (
    <CalculationForm />
  )
}













// export const App = () => {
//   const [counter, setCounter] = useState(0);

  
//   return (
//     <div>
//       <p>Counter value: {counter}</p>
//       <button onClick={() => setCounter(counter + 1)}>Next</button>
      
//     </div>
//   )
// }
     




// const ageGroups =["0-18", "19-30", "30+"]

// export const App = () => {
//   const [ageGroup, setAgeGroup] = useState();

//   return (
//     <form>
//       Age Group:
//       {ageGroups.map(group => (
//         <label key={group} >
//          <input 
//           type="radio"
//           value={group}
//           onChange={event => setAgeGroup(event.target.value)}
//           checked={ageGroup === group}
//          /> 
//         {group}
//         </label>
//       ))}
//     </form>
//   );
// }
  /*
  return (
   <form>
     Age Group:
     <div>
   <label>
     <input 
      type="radio"
      value="0-18"
      onChange={event => setAgeGroup(event.target.value)}
      checked={ageGroup === "0-18"}
     />
    0-18
   </label>
   
   </div>
   <div>
   <label>
     <input 
      type="radio"
      value="19-30"
      onChange={event => setAgeGroup(event.target.value)}
      checked={ageGroup === "19-30"}
     />
    19-30
   </label>
   </div>
   <div>
   <label>
     <input 
      type="radio"
      value="31+"
      onChange={event => setAgeGroup(event.target.value)}
      checked={ageGroup === "31+"}
     />
    31+
   </label>
   
       
   </div> 
   </form> 
  )
  */




























// export const App = () => {
//   const [wantsNewsletter, setWantsNewsletter] = useState(false);
  
//   return (
//    <form>
//    <label>
//      Newsletter?
//      <input 
//       type="checkbox"
//       checked={wantsNewsletter}
//       onChange={event => setWantsNewsletter(event.target.checked)}
//      />
//    </label>
//    </form> 
//   )
// }




// export const App = () => {
//const [location, setLocation] = useState('');
// return (
// <form>
    //   <select
    //   onChange={event => setLocation(event.target.value)}
    //    value={location}>
    //      <option value="">Select location:</option>
    //      <option value="stockholm">Stockholm</option>
    //      <option value="barcelona">Barcelona</option>
    //      <option value="oslo">Oslo</option>
    //   </select>
    // </form>
// )
// }    