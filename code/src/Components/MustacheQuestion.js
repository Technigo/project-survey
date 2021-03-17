import React from "react";



export const MustacheQuestion = ({ hasMustache, setHasMustache}) => {
    const onSetHasMustache  = (e) => {
    console.log(`Mustache: ${!hasMustache}`);
    setHasMustache(e.target.value); }

    return(
        <div onSubmit={event =>event.preventDefault()} className="questions-container">
            <label className="label">
                <p className="p">Check the box if you have a mustache:</p>
                    <input
                        className="radio-botton"
                        type="checkbox"
                        checked={hasMustache}
                        onChange={(e) => onSetHasMustache(e)}
                    />
            </label>
        </div>
    );
};

