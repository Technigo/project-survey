import React from 'react'

const programs = ['p1', 'p2']

const GetYourProgram = ({}) => {
 

    const program = programs[Math.floor(programs.length*Math.random())]
console.log(program)
    if (program === 'p1') {
        return (
            <p>helloo</p>
        )
    } else if (program === 'p2') {
        return (
            <p>hola</p>
        )
    }
        return (
            <p>sorry something wrong</p>
        )
    }
    
         
export default GetYourProgram 