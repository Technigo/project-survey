const Footer = ({ pageIndex, nextPage, previousPage }) => {
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
            <button className="previous-button button" onClick={previousPage}>
              <img src="./assets/zondicons/cheveron-up.svg" alt="up arrow" />
            </button>
          )}
          <div className="button-divider"></div>
          {pageIndex < 5 ? (
            <button className="next-button button" onClick={nextPage}>
              <img
                src="./assets/zondicons/cheveron-down.svg"
                alt="down arrow"
              />
            </button>
          ) : (
            <button className="next-button button disabled-button" disabled>
              <img
                src="./assets/zondicons/cheveron-down-disabled.svg"
                alt="down arrow"
              />
            </button>
          )}
        </nav>
        <div className="typeform">
          <a
            className="typeform-link button"
            href="https://www.typeform.com/templates/t/secret-santa-form/"
            target="_blank"
          >
            Inspired by<strong> Typeform</strong>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
