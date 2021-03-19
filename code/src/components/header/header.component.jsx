import React from "react";

import { HeaderContainer, Cloud, Shape, Blob } from "./header.styles";

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Header Content</h1>
      <Cloud />
      <Blob />
      <Shape />
    </HeaderContainer>
  );
};

export default Header;
