import React, { useState }  from 'react'
import { NameQuestion }  from './Components/NameQuestion.js';
import { NoseQuestion }  from './Components/NoseQuestion.js';
import { EyeQuestion }  from './Components/EyeQuestion.js';
import { SmileQuestion }  from './Components/SmileQuestion.js';
import { MustacheQuestion }  from './Components/MustacheQuestion.js';
import { Heading }  from './Components/Heading.js';
import { SubmitQuestions }  from './Components/SubmitQuestions.js';




export const App = () => {
const [noseSize, setNoseSize] = useState()
console.log(noseSize)

const [name, setName] =useState("");
console.log(name)

const [eyeColor, setEyeColor] = useState("");
console.log(eyeColor)

const [smile, setSmile] = useState()
console.log(smile)

const [hasMustache, setHasMustache] =useState(true);
console.log(hasMustache)

  return (
    <div className="main-container">
      <form>
        <Heading />
        <NameQuestion name={name} setName={setName}/>
        <NoseQuestion sizeOfNose={noseSize} setSizeOfNose={setNoseSize} />
        <EyeQuestion eyeColor={eyeColor} setEyeColor={setEyeColor} />
        <SmileQuestion smile={smile} setSmile={setSmile} />
        <MustacheQuestion hasMustache={hasMustache} setHasMustache={setHasMustache}/>
        <SubmitQuestions />
      </form>
    </div>
  )
}
