import React from 'react';

const QuestionDropdownGenre = (props) => {
  const { genre, setGenre } = props

  return (
    <form className="genre">
      <p> What genre do you prefer?</p>
      <select
        onChange={(event) => setGenre(event.target.value)}
        value={genre}>
        <option value="">Select genre:</option>
        <option value="romance">Romance</option>
        <option value="comic">Comic</option>
        <option value="crime">Crime</option>
        <option value="fantacy">Fantacy</option>
        <option value="sciFy">Science fiction</option>
      </select>
    </form>
  );
}

export default QuestionDropdownGenre;