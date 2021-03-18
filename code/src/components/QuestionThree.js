import React from 'react';
// import RadioOptionOne from './RadioOptionOne'

const QuestionThree = ({ flower, setFlower }) => {

    const onFlowerChange = (event) => {
        setFlower(event.target.value)
    }

    return (
        <>
            <div>
                <h2>Third Question</h2>
                <p>What's your favorite flower?</p>
             </div>

             {/* <label htmlFor={flower}></label>
                <input
                    name="flower"
                    id={flower}
                    value={flower}
                    type="radio"
                    onChange={(event) => {
                        onFlowerChange(event);
                    }}
                /> */}
  
            <div>
                <label htmlFor="Rose">Rose</label>
                <input 
                    name="flower" 
                    id="rose" 
                    type="radio" 
                    value="rose"
                    onChange={onFlowerChange}
                    checked={flower === "rose"}  
                />

                <label htmlFor="Rose">Tulip</label>
                <input 
                    name="flower" 
                    id="tulip" 
                    type="radio" 
                    value="tulip" 
                    onChange={onFlowerChange} 
                    checked={flower === "tulip"}  
                />

                <label htmlFor="Orchid">Orchid</label>
                <input 
                    name="flower" 
                    id="orchid" 
                    type="radio" 
                    value="orchid" 
                    onChange={onFlowerChange} 
                    checked={flower === "orchid"} 
                />
            </div> 

            <h3>Favorite flower: {flower}</h3>
        </>
    )

}

export default QuestionThree;