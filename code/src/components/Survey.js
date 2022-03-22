
import React from 'react';
import Dropdown from './Dropdown';
import DropdownTwo from './DropdownTwo';
import Radiobutton from './Radiobutton'
import Header from './Header';
import Name from './Name';

const Survey = () => {
    return(
        <div>
            <Header />
            <Name />
            <Dropdown />
            <DropdownTwo />
            <Radiobutton />
        </div>
    )
}

export default Survey

