import React from 'react'

const DropdownTwo = (props) => {

    return (
        <div>
            <h2>Number of issues</h2>
            <form>
                <select
                className="dropdown"
                    name="issues"
                    required
                    
                >
                    <option selected disabled>Select one</option>
                    <option value="three">3 issues</option>
                    <option value="six">6 issues</option>
                    <option value="10 issues">10 issues</option>
                </select>
            </form>

            <button onClick="">Next</button>

        </div>
    )
}

export default DropdownTwo