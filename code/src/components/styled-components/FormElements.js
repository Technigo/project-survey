import styled from "styled-components/macro";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 50px 20px 0 20px;
  font-family: "PT Serif", serif;
`;

export const Form = styled.form`
  margin: 0;
  padding-bottom: 30px;
`

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
  @media (min-width: 768px){
    font-size: 28px; 
  }
`;

export const RadioInput = styled.input`
  margin-right: 10px;
  padding: 0;
  @media (min-width: 768px){
    height: 24px;
    width: 24px; 
  }
`

export const RadioLabel = styled.p`
  font-size: 20px;
  @media (min-width: 768px){
    font-size: 28px; 
  }
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
  @media (min-width: 768px){
    font-size: 24px;
  }
`

export const Option = styled.option`
  font-size: 20px;  
  margin: 0;
  background-color: white;
  @media (min-width: 768px){
    font-size: 26px; 
  }
`
export const TextField = styled.input`
width: 100%;
height: 30px;
border: none;
border-bottom: 2px solid #512c0a;
background-color: transparent;
font-family: "PT Serif", serif;
font-size: 20px;
@media (min-width: 768px){
  font-size: 26px;   
}
`

export const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  margin: 0 0 25px 0;
  @media (min-width: 768px){
   font-size: 38px; 
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 35px 0 20px 0;
`

export const Button = styled.button`
  padding: 10px;
  border: 2px solid #2F0E07;;
  border-radius: 10px;
  background-color: white;
  font-family: "PT Serif", serif;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #2F0E07;
    &:hover {
      background-color: #2F0E07;
      color: white;
    }
    @media (min-width: 768px){
      font-size: 26px;
    }
`
export const SummaryContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 250, 229, 0.7);
    border-radius: 20px;
    border: 2px solid #2F0E07;
    padding: 20px;
    position: absolute;
    top: -170px;
    @media (min-width: 768px){
      top: -220px;
    }
    
    
`

export const TextWrapper = styled.div`
    text-align: left;
    margin: 0;
    width: 100%;
`

export const TextQuestion = styled.h2`
    margin: 0;
    font-size: 20px;
    @media (min-width: 768px){
      font-size: 26px;
    }
`

export const Span = styled.span`
    color: #3cbbb1;
`

export const TextAnswer = styled.p`
    font-size: 18px;
    @media (min-width: 768px){
      font-size: 24px;
    }
`