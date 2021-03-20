import React from 'react'
 
const ActivitySelect = ({ firstActivity, setFirstActivity }) => {
    const onFirstActivity = (e) => {
        setFirstActivity(e.target.value)
    }
 
    return (
        <div className="question-container">
            <h1 className="question-header">The first thing I'm going to do is to...</h1>
            <div className="select-activity">
            <select
                onChange={onFirstActivity}
                value= {firstActivity} 
            >
                <option disabled value="">Select an activity</option>
                <option value="hug family and friends">Hug family and friends</option>
                <option value="travel the world">Travel the world</option>
                <option value="enjoy a concert">Enjoy a concert</option>
                <option value="enjoy a sports event">Enjoy a sports event</option>
                <option value="enjoy a crowded party">Enjoy a crowded party</option>
            </select>
            </div>
        </div>  
    )
}

export default ActivitySelect