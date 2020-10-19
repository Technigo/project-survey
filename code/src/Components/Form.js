import React, {useState} from 'react';
import Summary from './Summary'

const Form = () => {

    const [name, setName] = useState('');
    const [favoriteSnack, setFavoriteSnack] = useState(''); 
    const [showSummary, setShowSummary] = useState(false);
    /* const [favoriteDrink, setFavoriteDrink] = useState(''); */

    const handleSubmit = event => {
        event.preventDefault();
        setShowSummary(true);
    };

    return (
        <div className="Form">
        <h1>Survey</h1>
        <form onSubmit={handleSubmit}>
            <label> Enter your name:
            <input 
            type='text'
            onChange={event => setName(event.target.value)}
            value={name}
            required
            />
            </label>
            
            <label> Choose your favorite snack: </label>
            <select 
            onChange={event => setFavoriteSnack(event.target.value)}
            value={favoriteSnack}
            required>
                <option value=''>Select favorite snack:</option>
                <option value='Cookies'>Cookies</option>
                <option value='Donuts'>Donuts</option>
                <option value='Ice cream'>Ice cream</option>
                <option value='Cake'>Cake</option>
                <option value='Fruit'>Fruit</option>
            </select>
            
            <button type='submit'>Submit</button>
        </form>
        
        {showSummary && <Summary name={name} snack={favoriteSnack} />}
    </div>
    
    );
};

export default Form /* Why do i need this when i use export in the function already?.. */

