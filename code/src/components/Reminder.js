import React from 'react'
 
const Reminder = ({ reminder, setReminder }) => {
    const onReminderChanged = (e) => {
        setReminder(e.target.value)
    }
 
    return (
        <section className="page-container">
            <header className="header-container">
                <h1>Finally, as a reminder...</h1>
            </header>
            <div className="input-container">
            	<h3>Write down all the crazy things this pandemic has taught you.</h3>
                <label htmlFor={reminder}></label>
                <input
                    name="reminder"
                    type="text"
                    placeholder="I will remember..."
                    value={reminder}
                    onChange={onReminderChanged}
                    className="input"
                />
            </div>       
        </section>  
    )
}

export default Reminder