import React from "react";

import "./reload.css";

const Reload = () => {
  window.location.reload();

  return (
    <section className="section-container">
      <button
        tabIndex="0"
        type="reset"
      // onClick={window.location.reload()}
      >
        Reload
      </button>
    </section>
  );
};

export default Reload;