/* eslint-disable linebreak-style */
/* eslint-disable */

import React, { useState } from 'react'


const FormQuestions = (props) => {

    const [symptom, setSymptom] = useState('')
      

    return (
    
         <div>
             <label htmlFor="symptoms">Symptoms</label>
             <select
                 onChange ={e => setSymptom(e.target.value)}
                 value = {symptom}
                 >
                 <option value = "">Do you have the following symptoms:</option>
                 <option value = "headache">Headache</option>
                 <option value = "cough">Cough</option>
                 <option value = "lossOfSmell">Loss of smell</option>
                 <option value = "lossOfTaste">Loss of taste</option>
                 <option value = "difficultyToBreath">Difficulty to breath</option>
                 <option value = "dizziness">Dizziness</option>
             </select>
         </div>

        
    )
}

export default FormQuestions