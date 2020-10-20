import React from 'react';

const FormSection = ({ className, inputType, buttonFirst, buttonSecond }) => {
  return (
    <section className={className}>
      {inputType}
      {buttonFirst}
      {buttonSecond}
    </section>
  );
};

export default FormSection;
