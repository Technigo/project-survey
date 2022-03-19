import React from 'react'

const OrderResult = ({ name }) => {

    return (
        <div className="container order-container">
            <h1 className="order">Thank you (name) for you order. 
            (amount) issues of GRACE Magazine will arrive directly to your snail mailbox. 
            We are so happy to have you as a reader!</h1>
            <img src="./src/images/grace.jpg" alt="image of cover" />
        </div>
        
    )
}

export default OrderResult