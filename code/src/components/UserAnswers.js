import React from 'react';

const UserAnswers = ({ userName, userTeam, userFeelings }) => {
  return (
    <>
      <div>
        <h2 className="question-title">Thank you for your answers {userName}!</h2>
        {/* This conditional returns different blocks depending on UserTeam answer */}
        {(() => {
          if (userTeam === 'Turtles') {
            return (
              <div>Let&apos; s go {userTeam}!</div>
            );
          } else if (userTeam === 'Tigers') {
            return (
              <div>Make some noice for the team {userTeam}!</div>
            );
          } else if (userTeam === 'Foxes') {
            return (
              <div>What does the {userTeam} say!?</div>
            );
          } else if (userTeam === 'Elephants') {
            return (
              <div>Yay!!!{userTeam}!</div>
            );
          } else if (userTeam === 'Hippos') {
            return (
              <div>Hip Hip {userTeam}!</div>
            );
          } else if (userTeam === 'Lions') {
            return (
              <div>Like the {userTeam} kings!</div>
            );
          }
        })()}
      </div>

      {/* This conditional returns different blocks depending on UserFeelings answer */}
      <div>
        {(() => {
          if (userFeelings === 'great') {
            return (
              <div>Nice at you feels {userFeelings}</div>
            );
          } else if (userFeelings === 'confused') {
            return (
              <div>
                It&apos; s normal to feel {userFeelings}.
                “Difficult roads often lead to beautiful destinations.”
                Don&apos;t worry! Talk to your team and try to figure it out.
              </div>
            );
          } else {
            return (
              <div>Nice Job {userFeelings}</div>
            );
          }
        })()}
      </div>
    </>
  )
}

export default UserAnswers

