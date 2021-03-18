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
console.log(name)

const [sizeOfNose, setSizeOfNose] = useState("")
console.log(sizeOfNose)

const [eyeColor, setEyeColor] = useState("");
console.log(eyeColor)

const [smile, setSmile] = useState()
console.log(smile)

const [hasMustache, setHasMustache] = useState();
console.log(hasMustache)

const [submit, setSubmit] = useState();
console.log(submit)

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
