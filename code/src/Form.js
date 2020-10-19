import React, { useState } from 'react'
import { Dropdown } from 'Dropdown'
import { Radio } from 'Radio'
import { Text } from 'Text'
import { Submit } from 'Submit'


export const Form = (  ) => {

    const [formInput, fetchFormInput] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleFormInput = (data) => {

        fetchFormInput(formInput + data)

    }

    return <div>
    
    {submit === false ? (
        <form onSubmit={(e) => {e.preventDefault();setSubmit(true)}} >
            <Dropdown handleFormInput={handleFormInput}/>
            <Radio handleFormInput={handleFormInput}/>
            <Text handleFormInput={handleFormInput}/>
            <Submit/>
      
     
    </form>
    ) : (<div>
        <p>{formInput}</p>
        
        </div>)
    }

    </div>
}