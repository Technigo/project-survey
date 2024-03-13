import React, { useEffect } from 'react';
import SnacksArray from './SnacksArray';
import ProgressButton from './ProgressButton';

const Texture = ({
  tasteGroup,
  type, texture, setTexture, progress, setProgress, showProgressButton,
  setShowProgressButton
}) => {
  const handleTextureChoice = (event) => {
    setShowProgressButton(false);
    setTexture(event.target.value);
    console.log('handle texture choice was called')
    setShowProgressButton(true);
  };
  const filteredTasteType = SnacksArray.filter(
    (snack) => snack.taste === tasteGroup && snack.type === type
  );

  useEffect(() => {
    setShowProgressButton(false)
    console.log('UE', { showProgressButton })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uniqueTextures = [...new Set(filteredTasteType.map((snack) => snack.texture))];
  console.log({ uniqueTextures })
  console.log({ showProgressButton })
  if (type === ('candy')) {
    return (
      <>
        <h3>What texture would you like?</h3>
        <form>
          {uniqueTextures.map((textureChoice) => (
            <label
              className={texture === textureChoice ? 'selected' : ''}
              htmlFor="type"
              key={textureChoice}>
              <input
                type="radio"
                value={textureChoice}
                onChange={handleTextureChoice}
                checked={texture === textureChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setTexture(textureChoice);
                  setShowProgressButton(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setTexture(textureChoice);
                    setShowProgressButton(true);
                  }
                }}>
                {textureChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            texture={texture} />
        )}
      </>
    )
  } else if (type === ('nuts')) {
    return (
      <>
        <h3>What texture would you like?</h3>
        <form>
          {uniqueTextures.map((textureChoice) => (
            <label
              className={texture === textureChoice ? 'selected' : ''}
              htmlFor="type"
              key={textureChoice}>
              <input
                type="radio"
                value={textureChoice}
                onChange={handleTextureChoice}
                checked={texture === textureChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setTexture(textureChoice);
                  setShowProgressButton(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setTexture(textureChoice);
                    setShowProgressButton(true);
                  }
                }}>
                {textureChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            texture={texture} />
        )}
      </>
    )
  } else if (type === ('fruit')) {
    return (
      <>
        <h3>What texture would you like?</h3>
        <form>
          {uniqueTextures.map((textureChoice) => (
            <label
              className={texture === textureChoice ? 'selected' : ''}
              htmlFor="type"
              key={textureChoice}>
              <input
                type="radio"
                value={textureChoice}
                onChange={handleTextureChoice}
                checked={texture === textureChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setTexture(textureChoice);
                  setShowProgressButton(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setTexture(textureChoice);
                    setShowProgressButton(true)
                  }
                }}>
                {textureChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            texture={texture} />
        )}
      </>
    )
  } else if (type === ('chips')) {
    return (
      <>
        <h3>What texture would you like?</h3>
        <form>
          {uniqueTextures.map((textureChoice) => (
            <label
              className={texture === textureChoice ? 'selected' : ''}
              htmlFor="type"
              key={textureChoice}>
              <input
                type="radio"
                value={textureChoice}
                onChange={handleTextureChoice}
                checked={texture === textureChoice} />
              <span
                role="button"
                tabIndex={0}
                onClick={() => {
                  setTexture(textureChoice);
                  setShowProgressButton(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setTexture(textureChoice);
                    setShowProgressButton(true)
                  }
                }}>
                {textureChoice}
              </span>
            </label>
          ))}
        </form>
        {showProgressButton && (
          <ProgressButton
            progress={progress}
            setProgress={setProgress}
            texture={texture} />
        )}
      </>
    )
  }
}

export default Texture;