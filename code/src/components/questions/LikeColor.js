import React from "react"
import RadioButtons from "components/inputTypes/RadioButtons"
import MoreToAdd from "./MoreToAdd"

const likeColor = ({
  color, 
  setColor,
  onStepChange,
  additional,
  setAdditional
}) => {
  return(
    <form>
      <label>Do you like the color scheme? 
        <RadioButtons
          value={color}
          setValue={setColor}
          valueArray={['yes', 'no']}
        />
      </label>

      {/* The <MoreToAdd /> only gets called, if the user clicks 'no' in the above question */}
      {color === 'no' && (
        <MoreToAdd
        labeltext={'How could I improve the color scheme?'}
        additional={additional}
        setAdditional={setAdditional}
      /> 
      )} 
      
      <button 
        disabled={color === ''}
        onClick={onStepChange}>Next question <span><b>'>>'</b></span>
      </button>
    </form>
  )
}

export default likeColor