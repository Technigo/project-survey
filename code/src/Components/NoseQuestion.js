import React, { useState } from "react";
import ReactDOM from"react-dom";



export const NoseQuestion = () => {
    const [noseSize, setNoseSize] = useState()

    return(
        <form>
            Do You have a:
            <div>
            <label>
                Small nose?
                    <input
                        type="radio"
                        value="Small nose"
                        onChange={event => setNoseSize(event.target.value)}
                        checked={noseSize === "Small nose"}
                    />  
                </label> 
                <label>
                Big nose?
                    <input
                        type="radio"
                        value="Big nose"
                        onChange={event => setNoseSize(event.target.value)}
                        checked={noseSize === "Big nose"}
                    />
                </label> 
                    <label>
                Pointy nose?
                    <input
                        type="radio"
                        value="Pointy nose"
                        onChange={event => setNoseSize(event.target.value)}
                        checked={noseSize === "Pointy nose"}
                    />
                </label> 
</div>
        </form>
    );
};

