import React from 'react';

import { Button } from './Button';


export const Name = props => {

    return (
        <>
            <label htmlFor="name" className="question-title"><i className="fas fa-long-arrow-alt-right"></i> So, let's start with your name</label>
            <input 
                id="name" 
                type="text" 
                className="input-name"
                placeholder="Type your answer here"
                value={props.value}
                onChange={props.onChange}
                required
            />
            <Button 
            button="CONTINUE" />
        </>

    )

}