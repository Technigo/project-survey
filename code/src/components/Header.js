import React from "react"

const Header = (props) => {
  return (
    <section className="section-container">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </section>
  )
}

export default Header;