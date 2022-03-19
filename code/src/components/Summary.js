import React, {useState} from 'react'

import Dropdown from './Dropdown';
import DropdownTwo from './DropdownTwo';
import Radiobutton from './Radiobutton'
import Header from './Header';
import Name from './Name';
import OrderResult from './OrderResult';

const Summary = () => {

    const [order, setOrder] = useState('')

return (
    <div className="container">
     <Header />
     <Name />
     <Dropdown />
     <DropdownTwo />
     <Radiobutton />
     <OrderResult />
    </div>
)
}

export default Summary