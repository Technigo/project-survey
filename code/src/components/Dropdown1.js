import React from 'react';

import './Dropdown1.css'

const Dropdown1 = ({ genre, setGenre}) => {

  return (
    <form className="dropdown-genre">
      <label className="genre-heading" htmlFor="genre" tabIndex="0">What is your favourite live music genre?</label>
    <select
    className="select-genre"
    onChange={event => setGenre(event.target.value)} 
    value={genre}
    >
     <option value="" disabled>Select genre:</option>
     <option value="classic">Classic</option>
     <option value="country">Country</option>
     <option value="electro">Electro</option>
     <option value="jazz">Jazz</option>
     <option value="pop">Pop</option>
     <option value="rnb">R'n'B</option>
     <option value="rock">Rock</option>
     <option value="techno">Techno</option>
    </select>
    </form>
  );
}

export default Dropdown1;