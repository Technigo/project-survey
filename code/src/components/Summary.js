import React from 'react'

const Summary = ({username, flavourInput, radioInput}) => {
    return (
      <div className='container'>
				<div className='form-container'>
          <h2>Mamma mia, let's see</h2>
					<p>What a delissimo choice {username}, gracie for your order</p>
					<p>You ordered a {flavourInput} with {radioInput} on it, exellent choice</p>
					<p>Thank you and buon appetito, see you next time...ciao</p>
				</div>
    </div>
    )
}

export default Summary;