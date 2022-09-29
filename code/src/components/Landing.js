const Landing = ({ setPageIndex }) => (
  <div className="landing-container">
    <picture className="welcome-container">
      <img src="./assets/welcome.png" alt="welcome" />
    </picture>
    <h1 className="title">
      This year we&apos;ll be celebrating on the 21st December—so make sure your
      gift is wrapped and under the tree by then.
    </h1>
    <div className="submit-button-wrapper">
      <button
        id="startButton"
        className="start-button button"
        type="submit"
        onClick={() => setPageIndex(1)}
      >
        I'm in!
      </button>
      <p className="press-enter">
        press
        <span>
          <strong> Enter ↵</strong>
        </span>
      </p>
    </div>
  </div>
);

export default Landing;
