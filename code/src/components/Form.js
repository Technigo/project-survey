import React, {useState} from 'react';

export const  Form = () => {
    const [name, setName] = useState('');

    const onNameChange = (event) => {
        setName (event.target.value);
    }

return(
    <form>
        <div>
            <label htmlFor="name">Whats your name?</label>
            <input id="name" type="text" value={name} onChange={onNameChange}/>
        </div>
        <div>
            <p>Pick your favourite?</p>
            <label htmlFor="red">Red Wine
            <input id="red" type="radio"/>
            </label>
            <label htmlFor="white">White Wine
            <input id="white" type="radio"/>
            </label>
            <label htmlFor="rose">Rosé Wine
            <input id="rose" type="radio"/>
            </label>
        </div>
        <div>
            <label htmlFor="country">Pick a country?</label>
            <select id="country">
                <option value="italy">Italy</option>
                <option value="spain">Spain</option>
                <option value="france">France</option>
                <option></option>
            </select>
        </div>

    </form>
)
}
