import React from 'react'

const Summary = ( { age, actor, username, personality, person } ) => {
    return (
        <section className='wrap'>
           <div className='content-wrap summary'>
                <h1>Summary</h1>
                <p> Thank you {username}!</p>
                <p> You answered:</p>
                <p>You're bestfriend is: {actor}</p>
                <p>Your age:{age}</p>
                {personality === true && <p>You said you are a frontend developer</p>}
                {personality === false && <p>You don't see yourself as a frontend developer</p>}
                {person === true && <p>...but you could see yourself as a painter too</p>}
                {person === false && <p>and you couldn't see yourself being a painter </p>}
            </div>
        </section>
    )
}

export default Summary;




