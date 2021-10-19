import React from "react";

const Drinks = () => {
  // const [name, setName] = useState("");
  // v1
  return (
    <form className="drinks">
      <lable for="Drinks-selection">Your drink of choice</lable>
      <select name="pets" id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Coffee</option>
        <option value="cat">Redbull</option>
        <option value="hamster">Coke</option>
        <option value="parrot">Milk</option>
      </select>
      <button>Next question</button>
    </form>
  );
};

export default Drinks;
