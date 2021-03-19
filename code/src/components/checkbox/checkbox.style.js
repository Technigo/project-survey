import styled from "styled-components";

const CheckboxContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 80px;
`;

const Row = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
`;
const CheckboxLabel = styled.label`
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid #f1c21b;
  display: inline-block;
  border-radius: 5px;
  margin-right: 25px;
  position: relative;
  cursor: pointer;
  transition: border-color 0.5s;
  &:hover {
    border-color: #e8b910;
  }
  &:after {
    content: "✔";
    color: #72b0be;
    font-size: 3.5rem;
    line-height: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
  }
`;

const Input = styled.input`
  position: absolute;
  left: -100vw;
  &:checked + ${CheckboxLabel}::after {
    opacity: 1;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  color: #04465c;
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 60%;
    position: absolute;
    background-color: #d1ece8;
    opacity: 0.9;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export { CheckboxContainer, Row, Checkbox, CheckboxLabel, Input, Title };
