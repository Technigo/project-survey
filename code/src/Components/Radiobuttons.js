import React from "react";

/* Array for plants */
const favoritePlants = ["Monstera", "Cactus", "Begonia", "Oxalis", "Aloe Vera", "Fiddle Leaf Fig", "Chinese Money Plant", "Philodendron", "Umbrella tree"];

/* Sending in favoritePlant and onSelectRadio as props in Radiobuttons*/
const Radiobuttons = ({favoritePlant, onSelectRadio }) => {
    
    return (
        <section className="question3-wrapper">
            <h3 className="question-header">
                3. If you had to choose, which is your favorite plant?
                <span role="img" aria-label="cactus"> 🌵 </span> 
            </h3>

            {/* Mapping over the plants array, generating a lable and input for each of the array items */}
            {favoritePlants.map(plant => (
                <label 
                    htmlFor={favoritePlant} 
                    className="label-radio"
                    aria-label={plant} 
                    tabIndex="0" key={plant}> {/* When using an array, each item needs to be given a unique key */}
                <input
                    className="radio-btn"
                    type="radio"
                    name="favorite-plant"
                    id="favorite-plant"
                    value={plant}
                    onChange={(event) => onSelectRadio(event.target.value)}
                    checked={favoritePlant === plant}
                    required
                />
                {plant} 
              </label>
              ))}
        </section>
    );
};

export default Radiobuttons;