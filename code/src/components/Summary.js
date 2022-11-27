import React from 'react';

export const Summary = ({
  ageGroup, total, met, meetsCardio, meetsStrength,
  meetsMovement, meetsBalance, specialGroup
}) => {
  // Count how many questions the user got
  if (ageGroup === '5 - 17' || ageGroup === '18 - 64') {
    total = 3;
  } else total = 4;

  // Count how many questions the user said yes to
  met = 0;
  if (meetsCardio === true) {
    met += 1;
  }
  if (meetsStrength === true) {
    met += 1;
  }
  if (meetsMovement === true) {
    met += 1;
  }
  if (meetsBalance === true) {
    met += 1;
  }

  return (
    <div>
      <h3>Summary</h3>
      <p className="summary">You belong to the {ageGroup} age group and
      meet {met} out of the {total} recommended activities for your age.
      </p>
      <p className="summary">You belong to the following special interest group: {specialGroup}.</p>
      <p className="summary">The physical activity recommendations for some groups may need adjustment.</p>
      <p className="summary">Please visit the <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity"> WHO website </a>
      for further information if you belong to any of the mentioned groups.
      </p>
      <button type="button" onClick={() => window.location.reload()}>Take again</button>
    </div>
  );
}
