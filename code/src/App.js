import React, {useState} from 'react'
import Header from 'Header'
import Create from 'Create'
import AddDataTodoList from 'AddDataTodoList'


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
