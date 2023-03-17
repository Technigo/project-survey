import React from 'react';
import Woods from './assets/sunny-gc1abeb561_1920.jpg';
import openedbox from './assets/box-open.svg';
import closedbox from './assets/box-archive.svg';

const LogoBox = () => {
  return (
    <div className="LogoBox">
      <div className="logo-subbox">
        <h1 className="companyname">Fox-in-a-box™</h1>
        <i className={openedbox} />
        <i className={closedbox} />
      </div>
      <img className="background" src={Woods} alt="an alley of trees on the countryside" />
    </div>
  )
}

export default LogoBox;