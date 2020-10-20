import React, { useState } from 'react';
import HeaderCss from 'components/HeaderCss.css'

const Header = ({title}) => {

    return (
        <h1>{title}</h1>
    );
};

export default Header