import React from "react"
import RadioButtons from "components/inputTypes/RadioButtons"

const LikeText =({text, setText}) => {
  return(
    <form>
      <label>What about the presentation text? Does it provide good information?
        <RadioButtons
          value={text}
          setValue={setText}
          valueArray={['yes', 'no']}
        />
      </label> 
    </form>
  )
}

export default LikeText