// import React, {useState} from 'react'

// const ageGroups= [
//     'Kerosene lamp',
//     'a match',
//     'Candle',
//     'Fireplace'
//   ]
  

// const QuestionFour = () => {
//     const [ageGroup, setAgeGroup] = useState()
//     return (
// <div>
//     <h1> You walk into a room that contains a match, a kerosene lamp,
//         a candle and a fireplace. What would you light first?</h1>
//      <form>
//      Answer:
//      {ageGroups.map((group)=>
//      <label key={group}>
//        <input
//        type="radio"
//        value={group}
//        onChange={(event)=> setAgeGroup(event.target.value)}
//        checked={ageGroup === group}
//        />
//        {group}
//        </label>
//      )}
//    </form>
//    </div> 
//     )
// }

// export default QuestionFour