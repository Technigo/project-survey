import React from 'react'

const DropdownTwo = (props) => {

    return (
        <div className="container dropdown-two-container">
            <h2>Number of issues</h2>
            <form>
                <select
                className="dropdown"
                    name="issues"
                    required
                    
                >
                    <option selected disabled>Select one</option>
                    <option value="three">3 issues for 12€</option>
                    <option value="six">6 issues for 18€</option>
                    <option value="10 issues">10 issues 30€</option>
                </select>
            </form>

            <div className="button-container">
            <button  onClick="">Next</button>
            </div>
        </div>
    )
}

export default DropdownTwo