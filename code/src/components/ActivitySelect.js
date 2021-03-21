import React from 'react'
 
const ActivitySelect = ({ firstActivity, setFirstActivity }) => {
    const onFirstActivity = (e) => {
        setFirstActivity(e.target.value)
    }
 
    return (
        <section className="page-container">
            <header className="header-container">
                <h1>The first thing I'm going to do after quarantine is to...</h1>
            </header>
            <div className="input-container">
            <h3>Travel, go to a football match or just go to a crowded bar?!</h3>
                <select
                    onChange={onFirstActivity}
                    value= {firstActivity}
                    className="input" 
                >
                    <option disabled value="">Select an activity</option>
                    <option value="hug family and friends">Hug family and friends</option>
                    <option value="travel the world">Travel the world</option>
                    <option value="enjoy a concert">Enjoy a concert</option>
                    <option value="enjoy a sports event">Enjoy a sports event</option>
                    <option value="enjoy a crowded party">Enjoy a crowded party</option>
                </select>
            </div>
        </section>  
    )
}

export default ActivitySelect