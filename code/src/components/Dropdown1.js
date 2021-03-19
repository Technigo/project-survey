import React from 'react';

const Dropdown1 = ({ genre, setGenre}) => {

  return (
    <form>
      <label htmlFor="genre" tabIndex="0">What is your favourite live music genre?</label>
    <select
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