import React, { useState } from "react";



export const MustacheQuestion = () => {
    const [hasMustache, setHasMustache] =useState("");

    return(
        <form onSubmit={event =>event.preventDefault(true)}>
            <label>
                Do you have a mustache?
                    <input
                        type="checkbox"
                        checked={hasMustache}
                        onChange={event => setHasMustache(event.target.checked)}
                    />
            </label>
        </form>
    );
};

