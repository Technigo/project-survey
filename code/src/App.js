import React, {useState} from 'react'
import Header from './Components/Header'
import Create from './Components/Create'
import AddDataTodoList from './Components/AddDataTodoList'


export const App = () => {



  return (


<div className="container">
<div className="header">
<Header/>
</div>

<div className="listContainer"> 
<AddDataTodoList />
</div>

<div className="create"> 
<Create  />
</div>

 </div>
    
  )
}
