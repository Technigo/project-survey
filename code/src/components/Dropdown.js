import React from 'react'

const Dropdown = (props) => {

    return (
        <div className="container dropdown-container">
            <h2>What welcome gift would you like?</h2>
            <form>
                <select
                className="dropdown"
                    name="where"
                    required
                    placeholder="this"
                >
                    <option selected disabled>Select one</option>
                    <option value="lottery ticket">Lottery Tickets</option>
                    <option value="book">Book</option>
                    <option value="charity">Donate 10€ to charity</option>
                </select>
            </form>

            <div className="button-container">
            <button  onClick="">Next</button>
            </div>

        </div>

    )
}

export default Dropdown