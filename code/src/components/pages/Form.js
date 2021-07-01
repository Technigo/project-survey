import React from 'react';
import styled from 'styled-components/macro';

import QuestionName from 'components/QuestionName';
import QuestionBooks from 'components/QuestionBooks';
import QuestionFavorite from 'components/QuestionFavorite';
import QuestionFilms from 'components/QuestionFilms';
import SubmitButton from '../SubmitButton';
import JaneProfile from '../assets/janeprofile.png'

const Form = () => {
  return (
    <SurveyWrapper>
      <Header>
        <Title>All About Jane</Title>
        <ImageWrapper>
          <Image src={JaneProfile} alt="jane-austin" />
        </ImageWrapper>
      </Header>
      <SurveyForm>
        <WhatsYourName />
        <QuestionBooks />
        <QuestionFavorite />
        <QuestionFilms />
        <SubmitButton />     
      </ SurveyForm>
    </SurveyWrapper>
  )
};

export default Form;

const SurveyWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto 20px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`

const SurveyForm = styled.form`
  background-color: rgba(255, 250, 229, 0.7);
  border-radius: 20px;
`
const Title = styled.h1`
  font-family: 'Great Vibes', cursive;
  color: #00000;
  font-size: 50px;
  margin: 16px;
`
const ImageWrapper = styled.div`
  border-radius: 50%
  border: 2px solid black;
  width: 60px;
  height: 100px;

`
const Image = styled.img`
  width: 100%;
`
