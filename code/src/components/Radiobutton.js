import React, {useState} from 'react'



const Forms = (props) => {

    const [order, setOrder] = useState('')

    return(
    <div>
                <h2>Would you like to receive our digital newsletter once a month?</h2>
        <form className="radio-buttons">
            <label className="label-radio">
                Yes!
            <input
            className="radio-button"  
            type="radio"
            name="radiobtn"
            required
            />
            </label>
            
            <label className="label-radio">
             No no.
            <input
            className="radio-button" 
            type="radio"
            name="radiobtn"
            required
            />
           </label>

           {/* <label>
                12 issues
            <input 
            type="radio"
            name="radiobtn"
            required
            />
           </label> */}
            </form>
            
            <p>{order}</p>

            <button onClick={() => {setOrder('Thank you for your purchase')}}>Place order</button>
    </div>
    )
}

export default Forms