import styled from "styled-components";

const CheckboxContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  width: 2rem;
  height: 2rem;
  border: 0.3rem solid #f79300;
  display: inline-block;
  border-radius: var(--spacing);
  position: relative;
  cursor: pointer;
  transition: border-color 0.5s;
  &:hover {
    border-color: #e08704;
  }
  &:after {
    content: "✔";
    color: #4aa46f;
    font-size: 2.7rem;
    line-height: 2rem;
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
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  color: #04465c;
  margin-left: calc(var(--spacing) * 4);
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
