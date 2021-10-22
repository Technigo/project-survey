import React from "react";
import "./Overview.css";

const Overview = ({
  nameInput,
  surnameInput,
  ageGroup,
  experienceInput,
  believesInput,
}) => {
  return (
    <section className="summary-container">
      <h2 className="summary-header">Summary</h2>
      <div className="summary-text">
        <p>
          Your name:
          <p style={{ color: "rgb(226, 224, 224)" }}>{nameInput}</p>
        </p>
        <p>
          Your surname:
          <p style={{ color: "rgb(226, 224, 224)" }}>{surnameInput}</p>
        </p>
        <p>
          Your age:
          <p
            style={{
              color:
                ageGroup === "30+" ? "cornflowerblue" : "rgb(226, 224, 224)",
            }}
          >
            {ageGroup}
          </p>
        </p>
        <p>
          Do you believe that life exists outside of this planet?
          <p
            style={{
              color:
                experienceInput === "100"
                  ? "cornflowerblue"
                  : "rgb(226, 224, 224)",
            }}
          >
            {experienceInput}%
          </p>
        </p>
        <p>
          Have you ever experienced something out of this world?
          <p
            style={{
              color:
                believesInput === "Yes"
                  ? "cornflowerblue"
                  : "rgb(226, 224, 224)",
            }}
          >
            {believesInput}
          </p>
        </p>
      </div>
    </section>
  );
};

export default Overview;
