import React from "react";
import Day from "./Day";
import Time from "./Time";
import Options from "./Options";
import Name from "./Name";
import Buttons from "./Buttons";

const Survey = (props) => {
  return (
    <>
      <form className="form">
        {props.section === 1 && <Day setDay={props.setDay} day={props.day} />}

        {props.section === 2 && (
          <Time setTime={props.setTime} time={props.time} />
        )}

        {props.section === 3 && (
          <Options setOptions={props.setOptions} options={props.options} />
        )}

        {props.section === 4 && (
          <Name setName={props.setName} name={props.name} />
        )}

        <Buttons setSection={props.setSection} section={props.section} />
      </form>
    </>
  );
};

export default Survey;
