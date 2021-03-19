import styled, { keyframes } from "styled-components";

import wave from "./wave.svg";

const animationWave = keyframes`
  0% {
    background-position: 0;
  }
  100% {
    /* from width of the svg file */
    background-position: 1600px;
  }
`;

const wavesReverse = keyframes`
  0% {
    background-position: 1600px;
  }
  100% {
    background-position: 0;
  }
`;

const FooterContainer = styled.footer`
  width: 100%;
  height: 150px;
  background: url("https://png.pngtree.com/thumb_back/fw800/back_pic/03/74/68/4957bc61710d9ff.jpg");
  background-size: cover;
  background-attachment: fixed;
  position: absolute;
  bottom: 0;
`;

const Wave = styled.div`
  position: absolute;
  width: 100%;
  /*height from the svg file*/
  height: 140px;
  bottom: 0;
  left: 0;
  background: url(${wave});
  animation: ${animationWave} 10s linear infinite;

  &:before {
    content: "";
    width: 100%;
    height: 140px;
    background: url(${wave});
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    animation: ${wavesReverse} 10s linear infinite;
  }
  &:after {
    content: "";
    width: 100%;
    height: 140px;
    background: url(${wave});
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.6;
    animation-delay: -5s;
    animation: ${animationWave} 20s linear infinite;
  }
`;

export { FooterContainer, Wave };
