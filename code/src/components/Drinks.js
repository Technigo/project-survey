import React from "react";

const Drinks = ({ drinksInput, onDrinksInputChange }) => {

    return (
        <div className="container">
            <form>
                <label>Pick your movie drink</label>
                <div class="select-box">
                    <select
                        onChange={onDrinksInputChange}
                        value={drinksInput}
                    >
                        <option value="">Select drink</option>
                        <option value="soft drinks">Soft drink</option>
                        <option value="alcohol">Alcohol</option>
                        <option value="water">Water</option>
                        <option value="tea">Tea</option>
                        <option value="nothing">No time to drink!</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Drinks;