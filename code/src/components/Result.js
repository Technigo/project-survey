import React from 'react';

export const Result = ({questionOne,answerTwoOption}) => {
  return (
    <>
      <div className='finalResult'>
      <p className='resultOne'>Your input " <span className='resultInput italic text-green-500'>{questionOne}</span> " tell you about YOURSELF. The way you placed the cube tells how grounded you are. 
         Is your cube floating? Your head is in the clouds. Resting in the sand? You're probably down to earth. The cubes material
         tell how transparent you are. Opaque cubes are more protective of their minds. Glowing? 
         You’re likely a positive person, who aims to raise the spirits of others. 
         Made of granite? You’re likely protective and resilient.</p>
      </div>
        <p>Your favourite food is {answerTwoOption}</p>
    </>
  );
}