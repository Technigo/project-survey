import React, { useState } from "react";

const Taglines = () => {
  //   const [name, setName] = useState("");
  // v1
  return (
    <form className="taglines">
      <label>
        <input className="taglines-quotes" type="radio" name="tagline" />
        "Are you calling me a snake? Honey, I'm a python!"
      </label>

      <label>
        <input class="masculine" type="radio" name="tagline" />
        "I'm never disengaging, I'm reacting!"
      </label>

      <label>
        <input class="genderneutral" type="radio" name="tagline" />
        "A little css will spice up any party!"
      </label>

      <label>
        <input class="genderneutral" type="radio" name="tagline" />
        "I have fame and fortune, and I've googled it!"
      </label>

      <button>Next question</button>
    </form>
  );
};

export default Taglines;
