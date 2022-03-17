 import React from 'react'

 const ageGroups= [
     '18-25',
     '25-35',
     '35-45',
     '>45'
  ]
  

 const QuestionFour = (props) => {
    const {group, onFourtInputChange} =props
    return (
 <div>
     <h1> choose your agegroupe and get the oportunity to meet other gardening entusiasts in your age</h1>
      <form>
      Answer:
     {ageGroups.map((group)=>
     <label key={group}>
        <input
            type="radio" 
            value={group} 
            onChange={onFourtInputChange}
            checked={ageGroup === group}
        />
        {group}
      </label>
     )}
    </form>
    </div> 

    )
 }

 export default QuestionFour