const Footer = ({ pageIndex, setPageIndex }) => {
  return (
    <footer>
      <div className="footer-wrapper">
        <nav className="footer-button-container">
          {pageIndex === 1 ? (
            <button className="previous-button button disabled-button" disabled>
              <img
                src="./assets/zondicons/cheveron-up-disabled.svg"
                alt="disabled up arrow"
              />
            </button>
          ) : (
            <button
              className="previous-button button"
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              <img src="./assets/zondicons/cheveron-up.svg" alt="up arrow" />
            </button>
          )}
          <button
            className="next-button button"
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            <img src="./assets/zondicons/cheveron-down.svg" alt="down arrow" />
          </button>
        </nav>
        <div className="typeform">
          <p>
            Inspired by <strong>Typeform</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
