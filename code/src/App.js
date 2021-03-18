import React, { useState }  from 'react'
import { NameQuestion }  from './Components/NameQuestion.js';
import { NoseQuestion }  from './Components/NoseQuestion.js';
import { EyeQuestion }  from './Components/EyeQuestion.js';
import { SmileQuestion }  from './Components/SmileQuestion.js';
import { MustacheQuestion }  from './Components/MustacheQuestion.js';
import { Heading }  from './Components/Heading.js';
import { SubmitQuestions }  from './Components/SubmitQuestions.js';
import { Respons }  from './Components/Respons.js';


export const App = () => {
const [name, setName] =useState();

const [sizeOfNose, setSizeOfNose] = useState("")

const [eyeColor, setEyeColor] = useState("");

const [smile, setSmile] = useState()

const [hasMustache, setHasMustache] = useState("");

const [submit, setSubmit] = useState();

  return (
    <div className="main-container">
      {submit ? (
        <Respons name={name} sizeOfNose={sizeOfNose} eyeColor={eyeColor} smile={smile} hasMustache={hasMustache}/>
      ) : (
      <form submit={submit}>
        <Heading />
        <NameQuestion name={name} setName={setName}/>
        <NoseQuestion sizeOfNose={sizeOfNose} setSizeOfNose={setSizeOfNose} />
        <EyeQuestion eyeColor={eyeColor} setEyeColor={setEyeColor} />
        <SmileQuestion smile={smile} setSmile={setSmile} />
        <MustacheQuestion hasMustache={hasMustache} setHasMustache={setHasMustache}/>
        <SubmitQuestions submit={submit} setSubmit={setSubmit} />
      </form>
      )}
    </div>
  )
}
