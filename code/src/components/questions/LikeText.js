import React from "react"
import RadioButtons from "components/inputTypes/RadioButtons"
import MoreToAdd from "./MoreToAdd"

const LikeText =({
  text, 
  setText,
  onStepChange,
  addText,
  setAddText,
}) => {
  return(
    <form>
      <label>What about the presentation text? Do you like it?
        <RadioButtons
          value={text}
          setValue={setText}
          valueArray={['yes', 'no']}
        />
      </label>

      {text === 'no' && (
        <MoreToAdd
        labeltext={'Do you have any suggestions for a better text?'}
        additional={addText}
        setAdditional={setAddText}
      /> 
      )} 

      <button 
        disabled={text === ''}
        onClick={onStepChange}>Next question
      </button>
    </form>
  )
}

export default LikeText