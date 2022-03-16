import React from 'react'

const programs = ['p1', 'p2']

const GetYourProgram = ({ }) => {
 

    const program = programs[Math.floor(Math.random()*programs.length)]

    if (program === 'p1' || program === 'p2') {
        return (
            Overview()
        )
    } else {
        return (
            <p>sorry something wrong</p>
        )
    }
}    
         
        

    

     

     
  
  
  
  export default GetYourProgram 