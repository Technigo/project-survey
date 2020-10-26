import React from "react";

import "./reload.css";

const Reload = () => {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <section className="section-container">
      <button
        tabIndex="0"
        type="reset"
        onClick={reloadPage}
      >
        Reload
      </button>
    </section >
  );

};

export default Reload;