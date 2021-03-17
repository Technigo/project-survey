import React, { useState } from "react";



export const MustacheQuestion = () => {
    const [hasMustache, setHasMustache] =useState(true);
    console.log(hasMustache)

    return(
        <div onSubmit={event =>event.preventDefault()} className="questions-container">
            <label className="label">
                <p className="p">Check the box if you have a mustache:</p>
                    <input
                        className="radio-botton"
                        type="checkbox"
                        checked={hasMustache}
                        onChange={(e) => setHasMustache(e.currentTarget.checked)}
                    />
            </label>
        </div>
    );
};

