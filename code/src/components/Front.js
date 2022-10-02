import React from 'react'


export const Front = ({greeting,setgreeting}) =>{
     
    return (
        <div className="frontContainer sm:text-center display-flex" onSubmit={(event) => event.preventDefault}>
            <h1 className='m-5 p-5 text-lg'>Survey</h1>
            <p className='headline m-8 p-8 text-4xl underline underline-offset-8 sm:text-center'>How well do you know yourself?</p>
        </div>
    )
}
