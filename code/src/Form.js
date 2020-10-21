import React, {useState} from 'react'
import { Age } from './Form components/Age.js'
// import { Type } from './Form components/Type.js'


export const Form = () => {
  const [age, setAge] = useState();
  const [type, setType] = useState(false);
  const [price, setPrice] = useState();
  const [special, setSpecial] = useState();

    return (
      <form>
          <Age age={age} setage={setAge}/>
          {/* <Type /> */}
      </form>      
    );
};