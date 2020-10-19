import React, { useState } from 'react'


/* TO FIX: When checking one box, both are checked. */
export const Checkbox = (props) => {
    const [selectCheckbox, setSelectCheckbox] = useState();

    return (
        <>
            <h2>{props.question}</h2>
            <form>
                <label>
                    <input
                        type="checkbox"
                        value={props.one}
                        checked={selectCheckbox}
                        onChange={(event) => setSelectCheckbox(event.target.checked)}
                    />{props.one}</label>
                <label>
                    <input
                        type="checkbox"
                        value={props.two}
                        checked={selectCheckbox}
                        onChange={(event) => setSelectCheckbox(event.target.checked)}
                    />{props.two}</label>
            </form>
        </>
    )
}