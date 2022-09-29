const Button = () => {
  return (
    <button
      className="submit-button button"
      type="submit"
      onClick={() => setPageIndex(1)}
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
