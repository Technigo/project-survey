import React from "react";
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  margin: 10px 0;
  padding: 5px 15px;
  text-transform: uppercase;
  color: #fff;
  border-radius: 5px;
  outline: 0;
  box-shadow: 0 2px 2px lightgray;
  cursor: pointer;
  background-color: ${(props) => theme[props.theme].default};
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

function clickMe() {
  console.log("I have been clicked!");
}

export default function App() {
  return (
    <>
      <div>
        <Button onClick={clickMe}>button</Button>
      </div>
      <div>
        <Button theme="pink" onClick={clickMe}>
          pink theme
        </Button>
      </div>
      <div>
        <Button disabled onClick={clickMe}>
          disabled button
        </Button>
      </div>
      <a href="#" target="_blank">
        <Button>link</Button>
      </a>
    </>
  );
}

// Button Tutorial: https://www.youtube.com/watch?v=gP8nQVlrwc0
