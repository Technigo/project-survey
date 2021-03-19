import React from 'react'


export const isSurveyComplete = () => {
  if (name === ""){
      return false; 
    }
if (dropdown === ""){
  return false; 
}
if (radio === "") {
  return false; 
}
if (secondRadio === ""){
  return false; 
}
return true; 
};

export default isSurveyComplete;