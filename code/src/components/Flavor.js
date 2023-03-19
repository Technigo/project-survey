import React from 'react';
import SnacksArray from './SnacksArray';

const Flavor = ({ tasteGroup, type, texture, flavor, setFlavor }) => {
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
  };

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
                  }
                }}>
                {flavorChoice}
              </span>
            </label>
          ))}
        </form>
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
      </>
    )
  }
}

export default Flavor;