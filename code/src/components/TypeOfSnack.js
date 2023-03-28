import React, { useEffect } from 'react';
import SnacksArray from './SnacksArray';
import ProgressButton from './ProgressButton';

const TypeOfSnack = ({
  tasteGroup,
  type,
  setType,
  progress,
  setProgress,
  showProgressButton,
  setShowProgressButton
}) => {
  const handleTypeChoice = () => {
    console.log('handletypechoice happened');
  };

  useEffect(() => {
    setShowProgressButton(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filteredForTasteGroup = SnacksArray.filter((snack) => snack.taste.includes(tasteGroup));
  const uniqueTypes = [...new Set(filteredForTasteGroup.map((snack) => snack.type))];

  (console.log({ tasteGroup }))
  console.log({ uniqueTypes })
  if (tasteGroup === 'sweet') {
    return (
      <div className="TypeComp">
        <h3>What type of snack would you prefer?</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              className={type === typeChoice ? 'selected' : ''}
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setType(typeChoice);
                  setShowProgressButton(true);
                  console.log('snackbutton incoming');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setType(typeChoice);
                    setShowProgressButton(true);
                  }
                }}>
                {typeChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            type={type} />
        )}
      </div>
    );
  } else if (tasteGroup === ('sour')) {
    return (
      <div className="TypeComp">
        <h3>What type of snack would you prefer?</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              className={type === typeChoice ? 'selected' : ''}
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setType(typeChoice);
                  setShowProgressButton(true);
                  console.log('snackbutton incoming');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setType(typeChoice);
                    setShowProgressButton(true);
                  }
                }}>
                {typeChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            type={type} />
        )}
      </div>
    );
  } else if (tasteGroup === ('savory')) {
    return (
      <div className="TypeComp">
        <h3>What type of snack would you prefer?</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              className={type === typeChoice ? 'selected' : ''}
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setType(typeChoice);
                  setShowProgressButton(true);
                  console.log('snackbutton incoming');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setType(typeChoice);
                    setShowProgressButton(true);
                  }
                }}>
                {typeChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            type={type} />
        )}
      </div>
    );
  } else if (tasteGroup === ('salty')) {
    return (
      <div className="TypeComp">
        <h3>What type of snack would you prefer?</h3>
        <form>
          {uniqueTypes.map((typeChoice) => (
            <label
              className={type === typeChoice ? 'selected' : ''}
              htmlFor="type"
              key={typeChoice}>
              <input
                type="radio"
                value={typeChoice}
                onChange={handleTypeChoice}
                checked={type === typeChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setType(typeChoice);
                  setShowProgressButton(true);
                  console.log('snackbutton incoming');
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setType(typeChoice);
                    setShowProgressButton(true);
                  }
                }}>
                {typeChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            type={type} />
        )}
      </div>
    );
  }
}

export default TypeOfSnack;