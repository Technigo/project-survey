import React, { useState } from 'react';

const Question2 = () => {
    const [term, setTerm] = useState('');

    const onTermChange = (e) => {
        console.log(e.target.value);
        setTerm(e.target.value);
    }
    
    return (
        <form>
            <div>
                <select 
                    id="term"
                    value={term}
                    onChange={onTermChange}
                >
                    <option value="">Select Investment Term:</option>
                    <option value="Long">Long</option>
                    <option value="Medium">Medium</option>
                    <option value="Short">Short</option>
                </select>
            </div>
        </form>
    )
}

export default Question2;