import React from "react"
import "./header.css"

export const Header = ({reflection}) => {
  return (
    <header>
      <h1>Daily Notes</h1>
        <a href="#reflection">
          <img className="arrow" src="./assets/down-arrow.jpg" alt="arrow icon"></img>
        </a>
    </header>
  )
} 