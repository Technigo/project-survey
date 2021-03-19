/* eslint-disable quotes */
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonText = styled(Link)`
  color: #2b6e7a;
  font-size: 18px;
  font-weight: 400;
`;
const ButtonContainer = styled.button`
  border: 2px solid #2b6e7a;
  border-radius: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  transition: all 0.5s ease-in-out;
  display: grid;
  justify-self: center;
  &:hover {
    background-color: #64848c;
  }
  &:hover ${ButtonText} {
    color: #fff;
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Label = styled.label`
  color: #04465c;
  display: block;
  margin-bottom: calc(var(--spacing) * 2);
  text-align: left;
`;

export { ButtonContainer, ButtonText, ButtonsContainer, Label };
