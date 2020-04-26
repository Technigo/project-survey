import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Container = styled.section`
  width: 95vw;
  min-height: 300px;
  margin: 4em auto;
  padding: 32px;
  background-color: #00203FFF;
  border-radius: 15px;
  box-sizing: border-box;
  @media (min-width: 1000px) {
    width: 900px;
  }
`
export const Title = styled.h1`
  display: black;
  text-align: center;
  color: palevioletred;
`

export const PinkButton = styled.button`
    box-shadow: none;
    border: none;
    width: 150px;
    height: 60px;
    background-color: #EDC2D8FF;
    font-size: 1.2em;
`


export const StyledLink = styled(Link)`
  display: block;
  width: 150px;
  padding: 10px;
  margin: 16px;
  background-color: #ADEFD1;
  color: #222;
  text-decoration: none;
  text-align: center;
  &:hover{
    background-color: #2D9CDB;
  }
`