import React from 'react';


const Header = () => {
  return(
    <header className="header-container">
      <h1>Welcome to this survey!</h1>
      <div>
        <p>Answer some questions about books</p>
     </div>
     <button className="start-button"><a href='#many'>Start!</a></button>
    </header>
  )

}


export default Header;