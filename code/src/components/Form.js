import React, { useState } from 'react';

import { Name } from './Name';
import { Select } from './Select';
import { Radio } from './Radio';
import { Welcome } from './Welcome';


export const Form = () => {
    const [name, setName] = useState("");
    const [select, setSelect] = useState();
    const [radio, setRadio] = useState();
   
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>


        <form className="form-container" onSubmit={handleSubmit}>
  
  
                <Welcome
                onChange={handleSubmit}/>

                <Name 
                    value={name}
                    onChange={(event) => setName(event.target.value)}/>

                <Select 
                    value={select}
                    onChange={(event) => setSelect(event.target.value)}/>

                <Radio 
                    name={radio}
                    checked={Radio === radio}
                    onChange={(event) => setRadio(event.target.value)}/>


        </form>


    </>
    )
}