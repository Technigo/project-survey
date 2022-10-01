import React from "react";

const sizes = [
    'Small, so it can fit in my handbag',
    'Medium, so I can easily spot it out on our walks in nature',
    'As large as they come, so I don’t have to bend over to pet it'
]



const QuestionThree = ({size, setSize}) => {
    const handleSizeChange = (event) => {
        setSize(event.target.value)
    }
        return (
            <>
            
            <h2>What size would you prefer for your new best friend?</h2>
                <form className="radio-buttons">
                    {sizes.map(dogSize => (
                    <label key={dogSize}>
                    <input
                        type="radio"
                        className="radio-button"
                        value={dogSize}
                        onChange={handleSizeChange}
                        checked={size === dogSize}
                        />
                    {dogSize}
                    </label>
                    ))}
                </form>
            
          </>
        
    )
}

export default QuestionThree