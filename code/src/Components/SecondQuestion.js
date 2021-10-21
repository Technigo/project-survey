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
              <option value="Aquaria">Aquaria</option>
              <option value="Bimini Bon Boulash">Bimini Bon Boulash</option>
              <option value="Violet Chachki">Violet Chachki</option>
              <option value="Gottmik">Gottmik</option>
              <option value="Bianca Del Rio">Bianca Del Rio</option>
              <option value="Sharon Needles">Sharon Needles</option>
            </select>
          </form>
        </div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default SecondQuestion;
