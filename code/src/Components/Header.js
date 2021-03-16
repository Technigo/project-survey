import React from 'react';


const Header = () => {
  return(
    <header className="header-container">
      <div className="header">
        <h1>Welcome to this survey!</h1>
        <div>
          <p>Please answer some questions about books:</p>
        </div>
        <button className="start-button"><a href='#many'>Sure!</a></button>
     </div>
    </header>
  )

}


export default Header;