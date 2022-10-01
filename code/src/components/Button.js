const Button = ({ nextPage, buttonText }) => {
  return (
    <button
      className="submit-button button"
      type="submit"
      onClick={() => nextPage()}
    >
      <span className="button-span">
        {buttonText ? buttonText : 'OK'}
        {!buttonText && (
          <img
            className="checkmark"
            src="./assets/zondicons/checkmark.svg"
            alt="checkmark"
          />
        )}
      </span>
    </button>
  );
};

export default Button;
