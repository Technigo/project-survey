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
<div className="contentContainer">
<form className="form" onSubmit={handleSubmit}>
<div className="ContainerOne">

 




<First

QuestionAlternative={title}
setAlternative={setTitle}
                  
/>


<Second

QuestionAlternative={task}
setAlternative={setTask}
                  
/>


<div className="contentRadio"> 
   

<Third

QuestionAlternative={check}
setAlternative={setCheck}


/>

 
<Fourth

QuestionAlternative={location}
setAlternative={setLocation}

/>

<Fifth 

QuestionAlternative={time}
setAlternative={setTime}

/>


</div>




<div className="content"> 
 
<button>Add Todo</button>

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
<p> To do: {task} </p>

</div>
</div>



</form>

</div>


    )
}

export default Create
