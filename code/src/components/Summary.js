/* eslint-disable linebreak-style */
/* eslint-disable */


import React, { useState } from 'react'

import FormQuestions from 'components/FormQuestions'
import {fname, setFname} from 'components/Form'


const Summary = ({fname, lname, gender, anamnes, checkboxGroup}) => {
    return (
        

        
        <div>
            <h1>{fname}</h1>
            <h1>{lname}</h1>
            <h2>{gender}</h2>
            
            <h2>{anamnes}</h2>
            <h2>{checkboxGroup.join(' ,')}</h2>


        </div>
             
        
            

        
                
        
             
        
        
        
    



    )

}

export default Summary