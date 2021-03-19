import React from 'react'
// import RadioOption from './RadioOption'



const QuestionThree = ({ flower, setFlower, item }) => {

    const onFlowerChange = (event) => {
        setFlower(event.target.value)
    }

    return (
        <>
            <label key={item} htmlFor={item}>{item}</label>
                <input 
                    name="flower" 
                    id={flower} 
                    type="radio" 
                    value={item}
                    onChange={onFlowerChange}
                    checked={flower === item }  
                />     
        </>
    )

}

export default QuestionThree;