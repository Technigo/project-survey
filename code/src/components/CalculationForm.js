import React, {useState} from 'react'

import Introduction from './Introduction';
import FirstQuestion from './FirstQuestion';
import SecondQuestion from './SecondQuestion';
import ThirdQuestion from './ThirdQuestion';
import Summary from './Summary';


const CalculationForm = () => {
    const [username, setUsername] = useState('');
    const [radioInput, setRadioInput] = useState('');
    const [flavourInput, setFlavourInput] = useState('');
    const [step, setStep] = useState(1)
    
    


    const handleInputChange = (event) => {
        setUsername(event.target.value);

    }

    const handleSelectChange = (event) => {
       setFlavourInput(event.target.value);

    }

    const handleRadioChange = (event) => {
        setRadioInput(event.target.value);

    }
    

    const backSlide = () => {
        setStep(step - 1)
    }

     const forwardSlide = () => { 
        setStep(step + 1)
    }




    return (
        <section>
            {step === 1 && <Introduction forwardSlide={forwardSlide} />}
            {step === 2 && (
				<FirstQuestion
					username={username} 
                    handleInputChange={handleInputChange} 
					forwardSlide={forwardSlide}
					backSlide={backSlide}
				/>
			)}
			{step === 3 && (
				<SecondQuestion
					locationInput={flavourInput}
					handleSelectChange={handleSelectChange}
					forwardSlide={forwardSlide}
					backSlide={backSlide}
				/>
			)}
			{step === 4 && (
				<ThirdQuestion
					radioInput={radioInput}
					handleRadioChange={handleRadioChange}
					forwardSlide={forwardSlide}
					backSlide={backSlide}
				/>
			)}
			{step === 5 && (
				<Summary
					username={username}
					flavourInput={flavourInput}
					radioInput={radioInput}
				/>
			)}
            
            

            
        </section>  
    );
};

export default CalculationForm





// const [username, setUsername] = useState('')

// const onInputChange = (event) => {
//     setUsername(event.target.value)
// }
//     return [
//         <section>
//         <h1>Welcome to Calculation form</h1>
//         <label htmlFor="name">Type your name</label>
//             <input 
//             type='text' 
//             id="name" 
//             value={username}
//             onChange={(onInputChange)}    
//             />
//         </section>
//     ]
// }

// export default Calculation;

// <div>    
            // <label htmlFor='numberOne'>Type first Number</label>
            // <input id='numberOne' 
            // type='number' 
            // value={numberOne} 
            // onChange={onFirstNumberChange} />
            // </div>
            // <div>
            // <label htmlFor='numberTwo'>Type second Number</label>
            // <input id='numberTwo' 
            // type='number' 
            // value={numberTwo} 
            // onChange={onSecondNumberChange} />
            // </div> 

             // <h2>{username}, the result of your calculation is {numberOne + numberTwo}</h2>