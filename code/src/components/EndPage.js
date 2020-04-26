import React from 'react'
import { Bar} from 'components/Form'
import { useSelector } from 'react-redux'
import { Container } from 'shared/shared'

export const EndPage = (props) => {
  const myAnswers = useSelector(state=>state.survey.answers)
 
    return (
<Container>
  <p>{myAnswers.name}</p>
</Container>
    )
}



{/* <button type ="submit" className="btn" onClick={setDone}>Submit answers</button>
      </form>
      {done && <EndPage name={values[2]} age ={values[1]} city={values[0]}  */}