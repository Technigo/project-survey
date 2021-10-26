import React from "react"

const SixthQuestion = ({ finalConfession, onFinalConfessionChange, onStepChange}) => {
    return (
        <div className="container">
        <form>
            <label
            ><h2>Confess your sin:</h2>
                <textarea
                    className="formControl"
                    id="finalConfession"
                    rows="5"
                    cols="60"
                    value={finalConfession}
                    onChange={onFinalConfessionChange}
                    placeholder="Write your confession here..."
                />
            </label>
            <button 
            className="btn" 
            disabled={finalConfession === ''}
            onClick={onStepChange}
            >See the result of my confession</button>
        </form>
        </div>
    )
}

export default SixthQuestion