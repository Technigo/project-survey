import React from 'react';
import styled from 'styled-components/macro';

import JaneProfile from './assets/janeprofile.png'

const Header = () => {
  return (
      <HeaderContainer>
        <Title>All About Jane</Title>
        <ImageWrapper>
          <Image src={JaneProfile} alt="jane-austin" />
        </ImageWrapper>
      </HeaderContainer>
  )
};

export default Header;



const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 35px;
`

const Title = styled.h1`
  font-family: 'Great Vibes', cursive;
  color: #00000;
  font-size: 40px;
  margin-right: 10px;
  @media (min-width: 768px){
    font-size: 60px;
    margin-right: 18px;
  }
`
const ImageWrapper = styled.div`
  border-radius: 50%
  border: 2px solid black;
  width: 60px;
  height: 100px;
  @media (min-width: 768px){
    width: 80px;
    height: 120px; 
  }

`
const Image = styled.img`
  width: 100%;
`
