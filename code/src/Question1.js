import React from 'react'

const dogActivityLevel= [
  'I am active and up and running all day long', 
  'I like to take a walk a couple of times a day', 
  'I just love to lie in the sofa and watch Netflix']

const Question1 = ({section, setSection, activityLevel, setActivityLevel}) => {

    return(
        <div className='first-question-section'>
          <h2 className='first-question-heading' tabIndex='0'> What type of activity level would match your lifestyle ?</h2>
            <div className='first-question-radio-container'>
              <label htmlFor='first-question' tabIndex='0'>Pick activity level: </label>
              {dogActivityLevel.map(activity => (
                <label 
                  tabIndex='0'
                  className='radio-buttons'
                  key={activity}>
                  <input
                    type='radio'
                    value={activity}
                    onChange={event => setActivityLevel(event.target.value)}
                    checked={activityLevel === activity}
                    required
                  />
                  {activity}
                </label>
                )
             

            )}
            </div>
          <button className="next-button" 
              value="secondQuestion"
              onClick={event => setSection(event.target.value)}
              type="button">Next question</button>
        </div>
        )
      }

export default Question1