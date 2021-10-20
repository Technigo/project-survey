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
              onChange={(event) => setSelectOption(event.target.value)}
            >
              <option value="Bimini Bon Boulash">Bimini Bon Boulash</option>
              <option value="Tayce">Tayce</option>
              <option value="Aquaria">Aquaria</option>
              <option value="Gottmik">Gottmik</option>
              <option value="Kandy Muse">Kandy Muse</option>
              <option value="Krystal Methyd">Krystal Methyd</option>
            </select>
          </form>
        </div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default SecondQuestion;
