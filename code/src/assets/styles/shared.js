import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonText = styled(Link)`
  color: #4aa46f;
  font-size: 18px;
  font-weight: 500;
`;
const ButtonContainer = styled.button`
  border: 1px solid #4aa46f;
  border-radius: calc(var(--spacing) * 2);
  padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
  transition: all 0.5s ease-in-out;
  display: grid;
  justify-self: center;
  &:hover {
    background-color: #4aa46f;
  }
  &:hover ${ButtonText} {
    color: #fff;
  }
`;

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: calc(var(--spacing) * 16);
`;

const Label = styled.label`
  font-size: 2rem;
  color: #626b6f;
  margin-bottom: calc(var(--spacing) * 8);
  text-align: left;
`;

export { ButtonContainer, ButtonText, ButtonsContainer, Label };
