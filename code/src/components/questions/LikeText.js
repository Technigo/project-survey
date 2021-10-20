import React from "react"
import RadioButtons from "components/inputTypes/RadioButtons"

const LikeText =({
  text, 
  setText,
  onStepChange
}) => {
  return(
    <form>
      <label>What about the presentation text? Does it provide good information?
        <RadioButtons
          value={text}
          setValue={setText}
          valueArray={['yes', 'no']}
        />
      </label> 
      <button onClick={onStepChange}>Next question</button>
    </form>
  )
}

export default LikeText