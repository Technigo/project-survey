import React from "react";

const FirstName = (props) => {
        const { name, onNameInputChange } = props;
    
      return (
       
        <form onSubmit={event => event.preventDefault()}>
          <label className="label-firstName" htmlFor="inputName">Type your name </label>
          <input
            type="text"
            id="inputName"
            value={name}
            className="input-name"
            onChange={onNameInputChange}
            // onChange={(e) => onNameInputChange(e)}
            // onChange={(e) => setNameInput(e.target.value)}
          />
         
          {/* <button onChange={}>submit</button> */}
        </form>
       
      );
    };
    export default FirstName;
    
