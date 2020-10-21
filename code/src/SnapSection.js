import React from 'react';
/*This component is for the scroll-snap property */
const SnapSection = (props) => {
  return (
    <section className="section">
      {props.children}
    </section>
  );
};

export default SnapSection;

