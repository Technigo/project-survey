import React from 'react'

const OrderResult = ({ username, dropdown, dropdownTwo }) => {

    return (
        <div onChange={OrderResult} className="container">
            <div className="order-container">
            <h1 className="order">Thank you <span>{username}</span> for your order.</h1>
             <h1 className="order"><span>{dropdownTwo}</span> of GRACE Magazine will arrive directly to your snail-mail mailbox.</h1>
             <h1 className="order">Your choice of welcome gift was {dropdown} and will be delivered together with your first magazine.</h1> 
            <h1 className="order">We are so happy to have you as a reader!</h1>
            
            </div>
            
            
        </div>
        
    )
}

export default OrderResult