import React, {useState} from 'react';

const handleSubmit = () =>{
  console.log("The form is submitted");
}

export const Form = () =>{
const [submitted, setSubmitted] = useState(false);
return (
    <form onSubmit={(event) => event.preventDefault()}>
       <button onSubmit={handleSubmit()}>Submit my answers</button>
    </form>
    )
}