import React from 'react'


export const Front = ({greeting,setgreeting}) =>{

    const popUp = value => {
        swal("Are you sure you want to do this?", {
            buttons: {
                cancel: {
                text: "OH NOEZ",
                value: null,
                visible: true,
                className: "",
                closeModal: true,
              },
              confirm: {
                text: "YEZ OF CORZ!",
                value: true,
                visible: true,
                className: "",
                closeModal: true
              }},
          });
    }
    //popUp.addEventListener('onClick', setquestionOne) 
    

    return (
        <div className="frontContainer sm:text-center" onSubmit={(event) => event.preventDefault}>
        <h1 className='m-5 p-5 text-lg'>Survey</h1>
        <p className='headline m-8 p-8 text-4xl underline underline-offset-8'>How well do you know yourself?</p>
        <button className="front-button border-solid border-2 rounded-full font-medium border-black border-late-100 m-6 p-6 " value={greeting} onClick={popUp}>LETS GO{greeting}</button>
        </div>
    )
}
