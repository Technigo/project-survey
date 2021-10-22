import React from "react";

const FifthQuestion = ({ game, onGameChange, onQuestionBackChange, onQuestionChange }) => {
	return (
		<div>
			<form className="form">
				<h2>What world would you like to start in?</h2>
				<label htmlFor="savanna">
                <input 
                    className="game-radio-button"
                    type="radio" 
                    id="savanna" 
                    name="game"
                    value="savanna"
                    onChange={onGameChange}
                />
                <img 
                    src="https://images.unsplash.com/photo-1596719033520-39451c977876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" 
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
                    value="rainforest"
                    onChange={onGameChange}
                />
                <img 
                    src="https://images.unsplash.com/photo-1560851691-ebb64b584d3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=899&q=80" 
                    alt="rainforest"
                    className="game-image"
                />
                </label>

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