import React from 'react';
// import RadioOption from './RadioOption'

// const flowers = ['rose', 'tulip', 'orchid']

const QuestionThree = ({ flower, setFlower, item }) => {

    const onFlowerChange = (event) => {
        setFlower(event.target.value)
    }

    return (
        <>
            {/* <div>
                <h2>Third Question</h2>
                <p>What's your favorite flower?</p>
             </div> */}

            <label key={item} htmlFor={item}>{item}</label>
                <input 
                    name="flower" 
                    id={flower} 
                    type="radio" 
                    value={item}
                    onChange={onFlowerChange}
                    checked={flower === item }  
                />     
  
            {/* <div>
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
            </div>  */}
        </>
    )

}

export default QuestionThree;