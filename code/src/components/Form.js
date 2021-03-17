import React from 'react';
import { Name } from './Name'
import { Age } from './Age'
import { Location } from './Location'

export const Form = () => {
    
    const submitFormHandler = event => {
        event.preventDefault();
        
        console.dir(this.refs.name.value); //will give us the name value
      }

    return (
        <form 
            className="form" 
            onSubmit={submitFormHandler}
        >
            <Name />
            <Location />
            <Age />
        </form>
    )
}