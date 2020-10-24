const validateEmail = (email) => {
  const isValidLength = email.length > 6;
  const isValidEmail = /\S+@\S+\.\S+/.test(email);
  const isValid = isValidLength && isValidEmail;
  let msg = null;
  if (!isValid) {
    msg = "Email address is invalid";
  }
  return {
    isValid,
    msg,
  };
};
