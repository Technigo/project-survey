import React, { useState } from 'react'

import { Header } from 'components/Header';
import { Dropdown } from './components/Dropdown';
import { Radiobutton } from './components/Radiobutton';
import { Textinput } from './components/Textinput';
import { Checkbox } from './components/Checkbox';
import { Summary } from './components/Summary';
import { Button } from 'components/Button';
import 'components/AppCss.css';


// useState is a function used when we want to change the state of a function component.
// It declares a “state variable” and returns an array with two things: 1. initial state value 
// and 2. a function we use to change the state. 
// To get the values of the state and of the function we use to change the state, we invoke the 
// the useState function.

// useState allows us to “preserve” some values between the function calls. Normally, variables 
// “disappear” when the function exits but state variables are preserved by React.
// State is a value in a component. Every time state changes, React re-renders the output.
// Below, the initial value of showSummary is set to false, since we do not want to show
// the summary to begin with. We call the showSummary when the questions have been
// answered.
// The useState variables are declared below in the function component App. And App accesses the values
// of these variables (that are temporarily stored in the child-components) by using props. 
export const App = () => {

  const [name, setName] = useState('');
  const [daysPerWeek, setDaysPerWeek] = useState();
  const [sweet, setSweet] = useState();
  const [showSummary, setShowSummary] = useState(false);
  const [likes, setLikes] = useState([]);

  // const handleSubmit is a function that is called in the form below. It's function: to set a new
  //state when button is clicked. 1. Prevent default action. 2. If all questions are answered, show summary. 
  //The state of setShowSummary is now true. React now renders whatever is inside the Summary component.
  // We use event.preventDefault to control the form since the form-tag refreshes by default.
  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  // const handleLikesChange (kittens/strawberries) is a function similar to the one above but I cannot 
  // explain it. It handles the input in the checkboxes. 
  // includes() method looks for specific value and return true or false
  
  const handleLikesChange = likeValue => {
    likes.includes(likeValue)
      ? setLikes( likes.filter(item => item !== likeValue) )
      : setLikes([...likes, likeValue]); //spread operator expands
      //console.log([...likes], likeValue)
  };
  
  return ( 
    <>
      <Header
      />

{/* negating showSummary - since we do not want to render the showSummary function, instead React renders 
what comes below in the form*/ }
      {!showSummary && (
      <form onSubmit={handleSubmit}>

{/* By importing App.js, React can render and re-render the various components and their values in HTML 
(and the browser), via index.js and the ReactDOM function. App.js accesses the values from the Textinput 
component using props. The child-component returns whatever value that has been inputted. App.js says: 
hey, Textinput-component! I'm sending you a (props)bag for storing the value of the input "name" that 
you have access to. Please, return that value by putting it in the props-bag. After that, App.js can pass 
these values on to other components such as the Summary component.*/}

        <Textinput
          name={name}
          setName={setName}
        />

        <Radiobutton
          daysPerWeek={daysPerWeek}
          setDaysPerWeek={setDaysPerWeek}
        />

        <Dropdown
          sweet={sweet}
          setSweet={setSweet}
        />

        <Checkbox 
           userLikes={likes} 
           onLikesChange={handleLikesChange}
        /> 

        <Button />

      </form>
      )}

{/*If all questions are answered showSummary will run. Since form only shows when we negate showSummary, the
form will be hidden when we run showSummary. When showSummary is true.  */}

      {showSummary && (
        <Summary
          name={name}
          daysPerWeek={daysPerWeek}
          sweet={sweet} 
          userLikes={likes.join(' and ')}
        />
      )}
    </>
  );
};

