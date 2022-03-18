import React from 'react'

const Summary = ({name, amountOfBands, bands, musicType, restart}) => {
    
    // const divideArray = () => {
    //     {musicType.map((musicType, index) => {
            
    //         if (musicType.length > 2 && index >= 0 && index < musicType.length -2) {
    //             return ', '
    //         } else if (index === musicType.length -2) {
    //             return ' & '
    //         } else {
    //             return  ''
    //         }
            
    //     })
    // }}

    // console.log(divideArray)



    return (
        <article>
            <div className="container">

                <p>Hello {name}, you listen to {amountOfBands} number of bands per week, that's cool.
                You also listed {bands} as your favourite band. 
                 You generally listen to this type of music: 
                 {musicType}
                 </p>
            

                <button className="restart"
                onClick={restart}
                >Go back to start</button>

            </div>
        </article>


    )
}

export default Summary