import React from "react";
import FirstName from "./FirstName";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="heading-one">JavaScript Test</h1>
      {/* Creation of another components and passing via props the nameInput variable and also the function to the header component */}
      <FirstName
        name={props.name}
        onNameInputChange={props.onNameInputChange}
      />
    </header>
  );
};

export default Header;
