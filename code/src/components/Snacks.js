import React from "react";


const Snacks = ({ snacksInput, onSnacksInputChange, }) => {

    return (
        <div className="container">
            <form>
                <label>Pick your movie snack</label>
                <div class="select-box">
                    <select
                        value={snacksInput}
                        onChange={onSnacksInputChange}
                    >
                        <option value="">Select snack</option>
                        <option value="chips">Chips</option>
                        <option value="popcorn">Popcorn</option>
                        <option value="soft candy">Soft candy</option>
                        <option value="chocolate">Chocolate</option>
                        <option value="nothing">No time to eat!</option>
                    </select>
                </div>
            </form>
        </div>
    );
};

export default Snacks;