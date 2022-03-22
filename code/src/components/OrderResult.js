import React from 'react'

const OrderResult = ({username, dropdownTwo}) => {
    // const { username, orderResult} = props

    return (
        <div onChange={OrderResult} className="container">
            <div className="order-container">
            <h1 className="order">Thank you {username} for your order. 
            {dropdownTwo} issues of GRACE Magazine will arrive directly to your snail-mail mailbox. 
            We are so happy to have you as a reader!</h1>
            {/* <img className="image-cover" src="/images/grace-two.jpg" alt="image of cover" /> */}
            </div>
            
            
        </div>
        
    )
}

export default OrderResult