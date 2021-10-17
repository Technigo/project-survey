import React from 'react'
import { useState } from 'react'

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

    console.log('new todo added')

})

}




    return (
        <div className="contentContainer">

<form className="form" onSubmit={handleSubmit}>
<div className="ContainerOne">

<div className="content"> 

<label> Write a To Do </label>

</div>

<div className="content"> 
<label>Title</label>
<input 
type="text"
required
value={title}
onChange = {(e) => setTitle(e.target.value)}


/>

</div>


<div className="content"> 

<label>Task</label>
<textarea 
required
value = {task}
onChange = {(e) => setTask(e.target.value)}
></textarea>

</div>

<div className="contentRadio"> 

<div className="contentSelect">
<label>Important</label>
<input 
type="radio"
value="Important"
onChange = {(e) => setCheck(e.target.value)}
checked={check === "Important"}

/>
</div>

<div className="contentSelect">
<label>Not important</label>
<input 
type="radio"
value="Not important"
onChange = {(e) => setCheck(e.target.value)}
checked={check === "Not important"}
/>
</div>
 
<div className="contentSelect"> 
<label>Location</label>
<select
value={location}
onChange ={(e) => setLocation(e.target.value)}

>
    <option value="Home">Home</option>
    <option value="Work">Work</option>
    <option value="Other">Other</option>
</select>
</div>
</div>


<div className="content"> 
<input type="time"
value={time}
onChange ={(e) => setTime(e.target.value)}

/> 


</div  >




<div className="content"> 
 
<button>Add Todo</button>

</div>
</div>
<div className="ContainerTwo">

<div className="typingTodoContainer">
<p> {check} </p>
<p> {time} </p>
<h2> Title: {title} </h2>
<p> To do: {task} </p>
<p>Location: {location} </p>

</div>
</div>



</form>

</div>


    )
}

export default Create
