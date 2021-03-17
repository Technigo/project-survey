import React from 'react';
import { ColorQuestion } from './ColorQuestion';
import { CountryQuestion } from './CountryQuestion';
import { NameQuestion } from './NameQuestion';

export const Form = () => {
    /*
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [country, setCountry] = useState('');

    const onNameChanged = (event) => {
        console.log(event.target.value);
        setName (event.target.value);
    };
        const onColorChanged = (event) => {
            console.log(event.target.value);
            setColor (event.target.value);
        };
            const onCountryChanged = (event) => {
                console.log(event.target.value);
                setCountry (event.target.value);
    };*/

return(
    <form className="form-container">
        <div className="form-container-questions">
        <NameQuestion/>
        <ColorQuestion/>
        <CountryQuestion/>
        <div className="submit">
            <button>Submit</button>
        </div>
        </div>
    </form>
);
};