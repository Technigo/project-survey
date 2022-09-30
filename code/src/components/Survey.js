import React from 'react';
//import "./components/Survey.js";

/*in survey most of the code happens*/


const Survey = ({id, question_text, input_type, options, onChange, inputValue}) => {
  return (
    <>

      if (input_type==="text") {
        <input
          id={id}
          question_text={question_text}
          value={value}
          onChange={onChange}
          inputValue={inputValue}
        ></input>
    }
    else if(input_type==="radio") {
           <input
           id={id}
           question_text={question_text}
           value={value}
           onChange={onChange}
           inputValue={inputValue}
         ></input>
    }
    else if (input_type==="select"){
            <input
            id={id}
            question_text={question_text}
            value={value}
            onChange={onChange}
            inputValue={inputValue}
            ></input>  
            
          }
    else{
      'its another type'
  }
    </>
  )
}
export default Survey;



