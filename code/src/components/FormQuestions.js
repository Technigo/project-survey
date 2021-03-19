/* eslint-disable linebreak-style */
/* eslint-disable */

import React, { useState } from 'react'


const FormQuestions = ({anamnes, onAnamnesChange}) => {

    
      

    return (
    
         <div>
             <label htmlFor="symptoms">Anamnes</label>
             <select

                 onChange={onAnamnesChange}
                 value = {anamnes}
                 
                 >
                 <option value = "">In the past 6 months did you have:</option>
                 <option value = "COVID-19">COVID-19 infection</option>
                 <option value = "antibodies against coronavirus">Antibodies against coronavirus</option>
                 <option value = "positive swab test for coronavirus">Positive swab test for coronavirus</option>
                 <option value = "vaccination against coronavirus">Vaccination against COVID-19</option>
                 <option value = "I am not aware of been infected by COVID-19">I am not aware of been infected by COVID-19</option>

             </select>
         </div>

        
    )
}

export default FormQuestions