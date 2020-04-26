import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'components/Form'
import {Container, StyledLink, Title} from '../shared/shared'


export const StartPage = () => {

    return (
        <Container>
        <Title>Do you need somewhere to live?</Title>
            <p>The Elephant Club offers rental appartments to people in need.</p>
            <StyledLink to='/form'>I need a Home</StyledLink>
      </Container>

    )

    
}
