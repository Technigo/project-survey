import React from 'react';

const Condiments = (props) => {

    const condimentsArray = ['Mayo', 'Mustard', 'Garlic sauce', 'Remoulade', 'Ketchup', 'Tomato sauce' ]

    const [setCondiment] = [props.setCondiment]

    return (
        <div className="Condiments">
        <p className="condiments-section">What is your go-to condiment?</p>
  
        {condimentsArray.map((item) => (
          <label className="condiments" key={item}>
          <input
            type="radio"
            value={item}
            onChange={(e) => {setCondiment(e.target.value)}}
          />
          {item}
          </label> 
          
          ))}
      </div>
    )
}

export default Condiments