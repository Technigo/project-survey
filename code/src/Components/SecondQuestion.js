import React from "react";
import ImageComponent from "Components/SecondImg";

const SecondQuestion = ({ selectOption, setSelectOption }) => {
  // const [selectOption, setSelectOption] = useState("");
  return (
    <div className="container">
      <div className="contentWrapper">
        <div className="selectForm">
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="select">Who is your favourite queen?</label>
            <select
              value={selectOption}
              id="select"
              onChange={(event) => setSelectOption(event.target.value)}
            >
              <option>Bimini Bon Boulash</option>
              <option>Tayce</option>
              <option>Aquaria</option>
              <option>Gottmik</option>
              <option>Kandy Muse</option>
              <option>Krystal Methyd</option>
            </select>
          </form>
        </div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default SecondQuestion;
