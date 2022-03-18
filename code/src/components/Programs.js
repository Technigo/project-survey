import React from 'react'

const programs = ['p1', 'p2', 'p3', 'p4']

const GetYourProgram = () => {
 

    const program = programs[Math.floor(programs.length*Math.random())]

    if (program === 'p1') {
        return (
            <>
            <h1>THIS IS THE PROGRAM WHICH CARDIO GENERATE CHOOSE FOR YOU TODAY</h1>
            <p>21-15-9</p>
            <p>Deadlift</p>
            <p>Sit ups</p>
            <p>Row kcal</p>
            <p>In first row, do all three motions 21 time. Second row 15 and third 9. Do all three rows without break</p>
            </>
        )
    } else if (program === 'p2') {
        return (
            <>
            <h1>THIS IS THE PROGRAM WHICH CARDIO GENERATE CHOOSE FOR YOU TODAY</h1>
            <p>4 rounds</p>
            <p>1min row</p>
            <p>1min sit ups</p>
            <p>1min burpee</p>
            <p>1min break</p>
            <p>Do all four rounds with no extra breaks</p>
            </>
        )
    } else if (program === 'p3') {
        return (
            <>
            <h1>THIS IS THE PROGRAM WHICH CARDIO GENERATE CHOOSE FOR YOU TODAY</h1>
            <p>Working time is 20 minutes</p>
            <p>40 lunges</p>
            <p>15 squats</p>
            <p>1min break</p>
            <p>As many rounds as possible with no extra breaks</p>
            </>
        )
    } else if (program === 'p4') {
        return (
            <>
            <h1>THIS IS THE PROGRAM WHICH CARDIO GENERATE CHOOSE FOR YOU TODAY</h1>
            <p>5 rounds</p>
            <p>2min walking</p>
            <p>2min jogging</p>
            <p>1min running</p>
            <p>Running exercise alternately walk, jog and run. Five rounds so length of exersice is 25 minutes.</p>
            </>
        )
    } else {
        return (
            <p>sorry something wrong</p>
        )
    }
}
    
         
export default GetYourProgram 