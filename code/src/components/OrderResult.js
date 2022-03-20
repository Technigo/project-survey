import React from 'react'

const OrderResult = (props) => {
    const { orderResult, onStepChange} = props

    return (
        <div onSubmmit={onStepChange} onChange={OrderResult} className="container">
            <div className="order-container">
            <h1 value={orderResult} className="order">Thank you (name) for you order. 
            (amount) issues of GRACE Magazine will arrive directly to your snail-mail mailbox. 
            We are so happy to have you as a reader!</h1>
            {/* <img className="image-cover" src="/images/grace-two.jpg" alt="image of cover" /> */}
            </div>
            
            
        </div>
        
    )
}

export default OrderResult