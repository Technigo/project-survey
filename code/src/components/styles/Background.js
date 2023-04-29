import styled, { keyframes, css } from 'styled-components';
import image1 from 'images/buildings-sun.jpg'
import image2 from 'images/toothbrush.jpg'
import image3 from 'images/curtains.jpg'
import image4 from 'images/house.jpg'
import image5 from 'images/boat.jpeg'
import image6 from 'images/green-building.jpg'
import image7 from 'images/traffic.jpg'

const FadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const Background = styled.div`
  height: 100vh;
  background-size: cover;
  min-height: 100 %;
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${FadeIn} 2s ease-in forwards;
  ${({ counter }) => counter === 0 && css`
      background-image: url(${image1});
    `}
    ${({ counter }) => counter === 1 && css`
      background-image: url(${image2});
    `}
    ${({ counter }) => counter === 2 && css`
      background-image: url(${image3});
    `}
    ${({ counter }) => counter === 3 && css`
      background-image: url(${image4});
    `}
    ${({ counter }) => counter === 4 && css`
      background-image: url(${image5});
    `}
    ${({ counter }) => counter === 5 && css`
      background-image: url(${image6});
    `}
    ${({ counter }) => counter === 6 && css`
      background-image: url(${image7});
    `}
`

