const Button = ({ nextPage }) => {
  return (
    <button
      className="submit-button button"
      type="submit"
      onClick={() => nextPage()}
    >
      <span className="button-span">
        OK
        <img
          className="checkmark"
          src="./assets/zondicons/checkmark.svg"
          alt="checkmark"
        />
      </span>
    </button>
  );
};

export default Button;
