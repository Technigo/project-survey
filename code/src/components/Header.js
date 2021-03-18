import React from 'react'



const Header = () => {
  return (
    <header className="header">
      <img className="image" src="assets/woman.png" alt="header"/>
      <div className="header-content">
        <h1 tabIndex="0">Are you a book lover?</h1>
        <h2>By answering this questions you will see your reading pattern.</h2>
        <button className="start-btn">Start</button>
      </div>

    </header>
  )
}

export default Header
