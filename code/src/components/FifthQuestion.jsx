import React from "react"

const FifthQuestion = ({ game, onGameChange, onQuestionBackChange, onQuestionChange }) => {
	return (
		<div>
			<form className="form">
				<h2>What world would you like to start in?</h2>
                <div className="game-container">
                    <label htmlFor="savanna">
                        <input 
                            className="game-radio-button"
                            type="radio" 
                            id="savanna" 
                            name="game"
                            value="the savanna"
                            onChange={onGameChange}
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1566273929481-74d2b81bda4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80" 
                            alt="savanna"
                            className="game-image"
                        />
                    </label>

                    <label htmlFor="rainforest">
                    <input 
                        className="game-radio-button"
                        type="radio" 
                        id="rainforest" 
                        name="game"
                        value="the rainforest"
                        onChange={onGameChange}
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1511936606692-5e0d73f6b638?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW5mb3Jlc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                        alt="rainforest"
                        className="game-image"
                    />
                    </label>
                </div>
                {/* buttons */}
				<div className="button-container">
                    <button 
                        type="button"
                        className="buttons" 
                        onClick={onQuestionBackChange}
                    >
                    Go Back
                    </button>
                    <button 
                        type="submit"
                        className="buttons" 
                        disabled={(game === '')}
                        onClick={onQuestionChange}
                    >
                        Continue
                    </button>
                </div>
			</form>
		</div>
	)
}

export default FifthQuestion