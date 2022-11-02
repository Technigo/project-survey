import React from 'react';

import { StartDay } from './StartDay';
import { Relationships } from './Relationships';
import { WhatKinde } from './WhatKinde';
import { Feeling } from './Feeling';

import { Buttons } from './Buttons';

export const Survey = (props) => {
  return (
    <form className="form">
      {props.section === 1 && (
        <StartDay setStartDay={props.setStartDay} startDay={props.startDay} />
      )}

      {props.section === 2 && (
        // eslint-disable-next-line max-len
        <Relationships setRelationships={props.setRelationships} relationships={props.relationships} />
      )}

      {props.section === 3 && (
        <WhatKinde setWhatKinde={props.setWhatKinde} whatKinde={props.whatKinde} />
      )}

      {props.section === 4 && (
        <Feeling setFeeling={props.setFeeling} feeling={props.feeling} />
      )}

      <Buttons setSection={props.setSection} section={props.section} />
    </form>
  );
};
