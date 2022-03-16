import React from 'react'

const Name = (props) => {
    return (
        <div className="page-container" role="form">
        <h2>Please input your first name:</h2>
        <input 
            id="name"
            type="text" 
            onChange={(event) => props.askName(event.target.value)} 
            value={props.name} 
        />
        {/* {!!props.error.length && <p>{props.error}</p>} */}
        </div>
    )
}

// Wrap in form - put inside component function
// Remove required
// Import useState if you want to create a const with a custom display warning rendered inside the question for error

// form needs a function: 
// onSubmit ={onFormSubmit}
// onStepChange is her "next page" button counter

// const [error, setError] = useState('')

// const onFormSubmit = (event) => {
//     event.preventDefault();
//     if (props.name.length) {
//         onStepChange(1)
//     } else {
//         setError('Please input the required fields.')
//     }
// }

// Add conditional rendering inside your component
// {!!props.error.length && <div>{error}</div>}

export default Name