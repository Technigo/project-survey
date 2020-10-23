import React, {useState} from 'react'
import { Welcome } from './Welcome.js'
import { DontTakeSurvey } from './DontTakeSurvey.js'
import { Form } from './Form.js'
import  Logo  from './Images/blue-bottle.png'

export const App = () => {

  const [pageState, setPageState] = useState(0);

  let page = <Welcome setPageState={setPageState} />; 
  if (pageState === 1) {
    page = <Form />;
  } else if (pageState === 2) {    
    page = <DontTakeSurvey />;
  } else {

  }

  return (
    <main>
      <header>
        <div className="logo-container">
          <h1>CRAFT BEER Co.</h1>
          <img src={Logo} alt="bottle logo" className="logo-image" />
        </div>
        <div className="nav-container">
          <nav>
            <a href="#">HOME</a>
            <a href="#">PRODUCTS</a>
            <a href="#">OUR STORY</a>
            <a href="#">CONTACT</a>
            <a href="#">CART</a>
          </nav>
        </div>
      </header>
      { page }   
    </main>
  );
};

// To do:
// 1. Link each form section so they are shown in order based on the user clicking on a button
// 2. Create an bottle image for the background so it looks like the form sections are inside or placed just over and outside of it.
// 3. Make background of the form slighly transparent.
// 4. Accessibility validation. 
