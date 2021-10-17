import React, {useState} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from 'Header'
import Create from 'Create'
import AddDataTodoList from 'AddDataTodoList'


export const App = () => {



  return (
<Router>

<div className="container">
<div className="header">
<Header />
</div>

<div className="listContainer"> 
<AddDataTodoList />
</div>

<div className="create"> 
<Create />
</div>




    </div>
    </Router>
  )
}
