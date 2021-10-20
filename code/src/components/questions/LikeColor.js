import React from "react"
import RadioButtons from "components/inputTypes/RadioButtons"

const likeColor = ({color, setColor}) => {
  return(
    <form>
      <label>Do you like the color scheme? 
        <RadioButtons
          value={color}
          setValue={setColor}
          valueArray={['yes', 'no']}
        />
      </label> 
    </form>
  )
}

export default likeColor