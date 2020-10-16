
import React, {useState} from 'react';
import { TextInput } from './TextInput';

export const Form = () =>{
const [submitted, setSubmitted] = useState(false);
const [inputName, setInputName] = useState();

return(
<div> 
  {!submitted &&(
      <form onSubmit={(event) => event.preventDefault(),() => setSubmitted(true)}>
     <TextInput 
            onSubmit={setInputName}
       />
      <button type="submit">Submit my answers</button>
        <p>{submitted}</p>
        <p>{inputName}</p>
      </form>)}
      {submitted &&(
     <h1>Form has been submitted</h1>)}
</div> 
)
}
/*
export const TextInput = (props) => {
  const [name, setName] = useState("Karolin");
  const handleChange = (event) =>{
    props.onSubmit(event.target.value);
  }

  return (
    <div className="text-input-container">
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        onSubmit={props.onSubmit(name)}
        value={name}
        required
      ></input>
  </div>
  );
};
*/
/*Above is working*/ 
/*
const FormContent = () =>{

  return(<>
     <TextInput 
            onSubmit={setInputName}
       />
    <button type="submit">Submit my answers</button>
    </>
  )
}
*/
/*Main Compontent in charge of rendering*/ 
export const App = () => {
  return (
    <Form />
  );
};