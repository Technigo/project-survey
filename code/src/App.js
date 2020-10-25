import React, {useState} from 'react'
import { Welcome } from './Welcome.js'
import { Form } from './Form.js'
import Logo from './Images.blue-bottle.png'

export const App = () => {

  // Using the pageState state to set the Welcome.js component as the first component you see when you enter the site. This is done in the comparison statement defined under the end header tag below. If pageState is true the Welcome.js is shown, else(:) the form is shown.  
  // The pageState state is changed to false when the button, that's defined in the Welcome.js, is clicked. This is because the onClick function is set to false by way of the setPageState function. 
  const [pageState, setPageState] = useState(true);

  return (
    <>
      <header>
        <div className="logo-container">
          <h1 tabIndex="0">CRAFT BEER Co.</h1>
          <img src={Logo} alt="bottle logo" className="logo-image" />
        </div>

        <div className="hamburger-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="nav-container">
          <nav>
            <a href="{welcome}">HOME</a>
            <a href="{welcome}">PRODUCTS</a>
            <a href="{welcome}">OUR STORY</a>
            <a href="{welcome}">CONTACT</a>
            <a href="{welcome}">CART</a>
          </nav>
        </div>        
      </header>
      <main>
        { pageState === true ? (
          <Welcome setPageState={setPageState}  />
        ) : (
          <Form />
        )}
      </main>
      {/* <footer className="footer-container">
        <p>Webpage created by Claire Caudwell using React and React state hooks. Part of the Technigo Bootcamp 2020</p>
      </footer> */}
    </>
  );
};

 
