import React from 'react';
import SnacksArray from './SnacksArray';
import ProgressButton from './ProgressButton';

const TasteGroup = ({
  tasteGroup,
  setTasteGroup,
  progress,
  setProgress,
  showProgressButton,
  setShowProgressButton
}) => {
  const uniqueTastes = [...new Set(SnacksArray.map((snack) => snack.taste))];

  const handleTasteChoice = (event) => {
    setTasteGroup(event.target.value);
    setShowProgressButton(true);
  }
  console.log({ tasteGroup });
  return (
    <div className="tasteGroup-container">
      <h3>First, please pick a taste.</h3>
      <form>
        {uniqueTastes.map((taste) => (
          <label
            htmlFor="tasteGroup"
            className={tasteGroup === taste ? 'selected' : ''}
            key={taste}>
            <input
              type="radio"
              value={taste}
              onChange={handleTasteChoice}
              checked={tasteGroup === taste} />
            <span
              role="button"
              tabIndex={0}
              onClick={() => {
                setTasteGroup(taste);
                setShowProgressButton(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setTasteGroup(taste);
                  setShowProgressButton(true);
                }
              }}>
              {taste}
            </span>
          </label>
        ))}
      </form>
      {showProgressButton && (
        <ProgressButton
          progress={progress}
          setProgress={setProgress}
          taste={tasteGroup} />
      )}
    </div>
  )
}

export default TasteGroup;