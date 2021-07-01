import styled from "styled-components/macro";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 1.5rem;
  font-family: "PT Serif", serif;
`;
export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  color: #2F0E07;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const RadioInput = styled.input`
  margin-right: 10px;
  padding: 0;
`

export const RadioLabel = styled.p`
  font-size: 18px;
`
export const Select = styled.select`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: 2px solid rgba(47, 14, 7, 0.7);
  background-color: transparent;
  font-family: "PT Serif", serif;
  font-size: 20px;
  color: rgba(47, 14, 7, 0.5);
`

export const Option = styled.option`
  font-size: 20px;  
  margin: 0;
  background-color: white;
`
export const TextField = styled.input`
width: 100%;
height: 30px;
border: none;
border-bottom: 2px solid #512c0a;
background-color: transparent;
font-family: "PT Serif", serif;
font-size: 20px;
`