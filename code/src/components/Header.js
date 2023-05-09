/* eslint-disable linebreak-style */

import React from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components/macro';

export const Header = () => {
  const Title = styled.h1`
    margin: 70px 20px 10px 20px;
    border: 2px solid springgreen;
    border-radius: 12px;`
  const StyledHeader = styled.header`
    border: 2px solid springgreen;
    border-radius: 12px;
    margin: 5px;`
  return (
    <StyledHeader>
      <Title>MADLIBS GAME</Title>
      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_memvksno.json"
        style={{ height: '150px', width: '150px' }}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
    </StyledHeader>
  )
}