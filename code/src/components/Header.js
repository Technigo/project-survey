import React from "react";
import FirstName from "./FirstName";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="heading-one">JavaScript Test</h1>

      <FirstName
        name={props.name}
        onNameInputChange={props.onNameInputChange}
      />
    </header>
  );
};

export default Header;
