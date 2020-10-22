import React from 'react';
/*This component is for the scroll-snap property */
const SnapSection = (props) => {
  return (
    <section className="section">
      <div className="wrapper">
        {props.children}
      </div>
    </section>
  );
};

export default SnapSection;

