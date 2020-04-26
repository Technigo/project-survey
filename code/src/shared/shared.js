import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const Container = styled.section`
  width: 95vw;
  min-height: 300px;
  margin: 4em auto;
  margin-left: auto;
  margin-right: auto;
  background-color: #00203FFF;
  border-radius: 15px;
  @media (min-width: 1000px) {
    width: 900px;
  }
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
  padding: 10px;
  margin: 16px;
  background-color: #ADEFD1;
  color: #222;
  text-decoration: none;
  &:hover{
    background-color: #2D9CDB;
  }
`