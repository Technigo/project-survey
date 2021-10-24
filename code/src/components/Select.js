import React from "react"

const Select = ( {
    goal,
    onGoalChange,
    onStepChange
} ) => {
    return (
        <form>
            <div className="question-container">
                <label className="question-heading" htmlFor="goal">What is your goal?</label>
                <p>What do you hope to learn/accomplish from this site?</p>
                <div className="element-container">
                    <select value={goal} onChange={onGoalChange}>
                        <option value="">Select your goal:</option>
                        <option value="inspiration">Inspiration</option>
                        <option value="knowledge">Knowledge</option>
                        <option value="distraction">Some distraction</option>
                    </select>
                    <button className="btn" onClick={onStepChange}>ok ✓</button>
                </div>
            </div>
        </form>
    );
};

export default Select