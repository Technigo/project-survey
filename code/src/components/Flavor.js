import React, { useEffect } from 'react';
import SnacksArray from './SnacksArray';
import ProgressButton from './ProgressButton';

const Flavor = ({
  tasteGroup,
  type, texture,
  flavor,
  setFlavor,
  progress,
  setProgress,
  showProgressButton,
  setShowProgressButton
}) => {
  const handleFlavorChoice = (event) => {
    const chosenFlavor = event.target.value;
    const isChecked = event.target.checked;
    let chosenFlavorGroup = [];

    if (isChecked) { 
      chosenFlavorGroup = [...flavor, chosenFlavor];
    } else {
      chosenFlavorGroup = flavor.filter((flavorChoice) => flavorChoice !== chosenFlavor);
    }

    setFlavor(chosenFlavorGroup);
    setShowProgressButton(true);
  };

  const handleSpanClick = (event) => {
    const chosenFlavor = event.target.getAttribute('data-value');
    const isChecked = flavor.includes(chosenFlavor);
    let chosenFlavorGroup = [];

    if (!isChecked) {
      chosenFlavorGroup = [...flavor, chosenFlavor];
    } else {
      chosenFlavorGroup = flavor.filter((flavorChoice) => flavorChoice !== chosenFlavor);
    }

    setFlavor(chosenFlavorGroup);
    setShowProgressButton(true);
  };

  useEffect(() => {
    setShowProgressButton(false)
    console.log('UE', { showProgressButton })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTasteTypeTexture = SnacksArray.filter(
    (snack) => snack.taste === tasteGroup && snack.type === type && snack.texture === texture
  );
  const uniqueFlavors = [...new Set(filteredTasteTypeTexture.flatMap((snack) => snack.flavor))];
  console.log({ flavor })
  if (texture === ('soft')) {
    return (
      <>
        <h3>What flavor or flavors floats your boat?</h3>
        <form>
          {uniqueFlavors.map((flavorChoice) => (
            <label
              className={flavor.includes(flavorChoice) ? 'selected' : ''}
              htmlFor={flavorChoice}
              key={flavorChoice}>
              <input
                type="checkbox"
                value={flavorChoice}
                onChange={handleFlavorChoice}
                checked={flavor.includes(flavorChoice)} />
              <span
                role="button"
                tabIndex={0}
                onClick={handleSpanClick}
                data-value={flavorChoice}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSpanClick(e);
                    setShowProgressButton(true);
                  }
                }}>
                {flavorChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            flavor={flavor} />
        )}
      </>
    )
  } else if (texture === ('chewy')) {
    return (
      <>
        <h3>What flavor or flavors floats your boat?</h3>
        <form>
          {uniqueFlavors.map((flavorChoice) => (
            <label
              className={flavor.includes(flavorChoice) ? 'selected' : ''}
              htmlFor={flavorChoice}
              key={flavorChoice}>
              <input
                type="checkbox"
                value={flavorChoice}
                onChange={handleFlavorChoice}
                checked={flavor.includes(flavorChoice)} />
              <span
                role="button"
                tabIndex={0}
                onClick={handleSpanClick}
                data-value={flavorChoice}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSpanClick(e);
                  }
                }}>
                {flavorChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            flavor={flavor} />
        )}
      </>
    )
  } else if (texture === ('crunchy')) {
    return (
      <>
        <h3>What flavor or flavors floats your boat?</h3>
        <form>
          {uniqueFlavors.map((flavorChoice) => (
            <label
              className={flavor.includes(flavorChoice) ? 'selected' : ''}
              htmlFor={flavorChoice}
              key={flavorChoice}>
              <input
                type="checkbox"
                value={flavorChoice}
                onChange={handleFlavorChoice}
                checked={flavor.includes(flavorChoice)} />
              <span
                role="button"
                tabIndex={0}
                onClick={handleSpanClick}
                data-value={flavorChoice}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSpanClick(e);
                  }
                }}>
                {flavorChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            flavor={flavor} />
        )}
      </>
    )
  } else if (texture === ('crispy')) {
    return (
      <>
        <h3>What flavor or flavors floats your boat?</h3>
        <form>
          {uniqueFlavors.map((flavorChoice) => (
            <label
              className={flavor.includes(flavorChoice) ? 'selected' : ''}
              htmlFor={flavorChoice}
              key={flavorChoice}>
              <input
                type="checkbox"
                value={flavorChoice}
                onChange={handleFlavorChoice}
                checked={flavor.includes(flavorChoice)} />
              <span
                role="button"
                tabIndex={0}
                onClick={handleSpanClick}
                data-value={flavorChoice}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSpanClick(e);
                  }
                }}>
                {flavorChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            flavor={flavor} />
        )}
      </>
    )
  }
}

export default Flavor;