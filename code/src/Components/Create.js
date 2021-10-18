import React from 'react'
import { useState } from 'react'
import First from 'Components/First'
import Second from 'Components/Second'
import Third from 'Components/Third'
import Fourth from 'Components/fourth'
import Fifth from 'Components/Fifth'


const Create = () => {
const [title, setTitle] = useState('')
const [task, setTask] = useState('')
const [location, setLocation] = useState('Home')
const [check, setCheck] = useState('')
const [time, setTime] = useState('')
const [step, setStep] = useState(1);


const onStepChange = () => {
    setStep(step + 1);
};


const handleSubmit = (e) =>{
   /*  e.preventDefault(); */
    const todo = {title, task, location, check, time} 

    fetch('http://localhost:8000/todo', 
    {method: 'POST', 
    headers: {"content-type": "application/json"},
    body: JSON.stringify(todo)
}).then(()=> {


})

}


    return (

<form className="form" onSubmit={handleSubmit}>
<div className="ContainerOne">


{step === 1 && (
<First

QuestionAlternative={title}
setAlternative={setTitle}
onStepChange={onStepChange}                  
/>

)}

{step === 2 && (
<Second

QuestionAlternative={task}
setAlternative={setTask}
onStepChange={onStepChange}                  
/>

)}
<div className="contentRadio"> 
   
{step === 3 && (
<Third

QuestionAlternative={check}
setAlternative={setCheck}
onStepChange={onStepChange}

/>

)}

{step === 4 && (

<Fourth

QuestionAlternative={location}
setAlternative={setLocation}
onStepChange={onStepChange}
/>
)}
{step === 5 && (
    <div className="box">
<Fifth 

QuestionAlternative={time}
setAlternative={setTime}

/>


<button>Add Todo</button>



</div>

)}







</div>


</div>
<div className="ContainerTwo">
<div className="typingTodoContainer">
<div className="todoPreDiv">
<p> {check} </p>
<p> {time} </p>
<p>{location} </p>
</div>
<h2>{title} </h2>
<p className="toDotext"> To do: {task} </p>

</div>
</div>



</form>




    )
}

export default Create
