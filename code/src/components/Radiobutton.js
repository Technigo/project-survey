import React, { useState } from 'react';
import RadiobuttonCss from 'components/RadiobuttonCss.css'


const ageGroups = ["0-18", "19-30", "30+"];

const Radiobutton = ({questionAge}) => {
    const [ageGroup, setAgeGroup] = useState();

    return (
        <form>
            <h2>{questionAge}</h2>
            <p className="agegroup">Age group:</p>
            {ageGroups.map((group) => (
            <label htmlFor="" key={group}>
                <input
                type="radio"
                value={group}
                onChange={(event) => setAgeGroup(event.target.value)}
                checked={ageGroup === group}
                />
                {group}
            </label>
            ))}
        </form>
  );
};

export default Radiobutton