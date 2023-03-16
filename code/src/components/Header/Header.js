import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <img src={`${process.env.PUBLIC_URL}/assets/the-mountain-lodge-logo.png`} alt="Hotel logo" />
  )
};