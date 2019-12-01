export const inputValidation = (target, error, setError, eventType) => {
  if (target.type === 'text' && target.value.length < 3) {
    // Error message logged to the console when changing state
    console.log(`on${eventType}: setting error state for ${target.name}`);
    setError({
      ...error,
      [target.name]: 'A minimum of 3 characters is required'
    });
  } else if (target.type === 'text' && target.value.length > 25) {
    setError({
      ...error,
      [target.name]: 'A maximum of 25 characters are allowed'
    });
  } else {
    setError({
      ...error,
      [target.name]: ''
    });
  }
};
