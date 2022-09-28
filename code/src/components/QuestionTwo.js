import React from "react";

const activities = [
    'An adventurous hike in the forest',
    'At a coffee shop downtown',
    'With my family on a chill pic-nic',
    'Out on a moose hunt!'
]

const QuestionTwo= ({activity, setActivity}) => {

    const handleActivityChange =(event) => {
        setActivity(event.target.value)
    }

        return (
            <>
            <h2>Where would you prefer to spend some quality time with your pup?</h2>

            <form className="radio-buttons">
              {activities.map(group => (
                <label key ={group}>
                  <input
                    type="radio"
                    value={group}
                    onChange={handleActivityChange}
                    checked={activity === group}
                    />
                    {group}
                  </label>
              ))}
          </form>
      </>
    
    )

}

export default QuestionTwo