import React from 'react'
import { useState} from 'react'
import First from 'Components/First'
import Second from 'Components/Second'
import Third from 'Components/Third'
import Fourth from 'Components/fourth'
import Fifth from 'Components/Fifth'
import NewList from 'Components/NewList'


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






    return (

<form className="form">



{step === 1 && (
    <div className="box">
<First

QuestionAlternative={title}
setAlternative={setTitle}
onStepChange={onStepChange}                  
/>
</div>
)}

{step === 2 && (
    <div className="box">
<Second

QuestionAlternative={task}
setAlternative={setTask}
onStepChange={onStepChange}                  
/>
</div>
)}

   
{step === 3 && (
       <div className="box">
<Third

QuestionAlternative={check}
setAlternative={setCheck}
onStepChange={onStepChange}

/>
</div>
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
onStepChange={onStepChange}
/>


<button onClick={onStepChange}>Add Todo</button>



</div>

)} 

{step === 6 && (
   

<NewList 
  todoTitle={title}
todoTask={task}
todoLocation={location}
 todoCheck={check}
  todoTime={time}

/>




)}






</form>

)
}

export default Create




