import React, { useEffect } from 'react';
import ProgressButton from './ProgressButton';

const ImportantOption = ({
  importantLabel,
  setImportantLabel,
  progress,
  setProgress,
  showProgressButton,
  setShowProgressButton
}) => {
  /*
  const handleImportantChoice = (event) => {
    const chosenLabel = event.target.value;
    const isChecked = event.target.checked;
    let chosenLabelGroup = [];

    if (isChecked) {
      chosenLabelGroup = [...importantLabel, chosenLabel]
    } else {
      chosenLabelGroup = chosenLabelGroup.filter((value) => value !== chosenLabel);
    }
    setImportantLabel(chosenLabelGroup);
    setShowProgressButton(true);
    console.log('CHECKBOX');
  }
  */

  /* clicking once adds nothing to the array,
   you need to click twice.
    Also, only one value can be added to the importantLabel at a time, not as many as you like,
    unless you click in the right order */
  const handleSpanClick = (event) => {
    const chosenLabel = event.target.getAttribute('data-value');
    let chosenLabelGroup = [];
    console.log(importantLabel)

    if (!importantLabel.includes(chosenLabel)) {
      chosenLabelGroup = [...importantLabel, chosenLabel]
      console.log(importantLabel)
    } else {
      chosenLabelGroup = importantLabel.filter((value) => value !== chosenLabel)
    }
    setImportantLabel(chosenLabelGroup)
    console.log('LABEL');
    setShowProgressButton(true);
  }

  useEffect(() => {
    setShowProgressButton(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Are any of these important to you?</h3>
      <form>
        <label htmlFor="vegan">
          <input
            type="checkbox"
            id="vegan"
            name="vegan"
            value="vegan"
            style={{ display: 'none' }} />
          <span
            role="button"
            tabIndex={0}
            onClick={handleSpanClick}
            data-value="vegan"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSpanClick(e);
              }
            }}>
            Vegan
          </span>
        </label>
        <label htmlFor="sugarfree">
          <input
            type="checkbox"
            id="sugarfree"
            name="sugarfree"
            value="sugarfree"
            style={{ display: 'none' }} />
          <span
            role="button"
            tabIndex={0}
            onClick={handleSpanClick}
            data-value="sugarfree"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSpanClick(e);
              }
            }}>
            Sugarfree
          </span>
        </label>
        <label htmlFor="ecological">
          <input
            type="checkbox"
            id="ecological"
            name="ecological"
            value="ecological"
            style={{ display: 'none' }} />
          <span
            role="button"
            tabIndex={0}
            onClick={handleSpanClick}
            data-value="ecological"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSpanClick(e);
              }
            }}>
            Ecological
          </span>
        </label>
      </form>
      {showProgressButton && (
        <ProgressButton
          progress={progress}
          setProgress={setProgress} />
      )}
    </>
  );
};

export default ImportantOption;