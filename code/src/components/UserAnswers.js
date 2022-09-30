import React from 'react';

// eslint-disable-next-line no-unused-vars
const UserAnswers = ({
  userName,
  userTeam,
  userFeelings,
  userAloneOrBuddy,
  userHours,
  userBuddy
}) => {
  return (
    <div className="answers-wrapper">
      <div>
        <h1 className="header">Thank you !</h1>
        {/* This conditional returns different blocks depending on UserTeam answer */}
        {(() => {
          if (userTeam === 'Turtles') {
            return (
              <h3 className="sub-header">Let&apos;s go {userTeam}!</h3>
            );
          } else if (userTeam === 'Tigers') {
            return (
              <h3 className="sub-header">Make some noice for the {userTeam}!</h3>
            );
          } else if (userTeam === 'Foxes') {
            return (
              <h3 className="sub-header">What does the {userTeam} say!?</h3>
            );
          } else if (userTeam === 'Elephants') {
            return (
              <h3 className="sub-header">Pawooooo... said the {userTeam}!</h3>
            );
          } else if (userTeam === 'Hippos') {
            return (
              <h3 className="sub-header">Hipp Hipp, {userTeam}!</h3>
            );
          } else if (userTeam === 'Lions') {
            return (
              <h3 className="sub-header">Like the {userTeam} kings!</h3>
            );
          }
        })()}
      </div>

      {/* This conditional returns different blocks depending on UserFeelings answer */}
      <div>
        {(() => {
          if (userFeelings === 'great' || userFeelings === 'awesome') {
            return (
              <>
                <h3 className="question-title">
                  {userName}, you aren&apos;t overreacting feeling that last week
                  was {userFeelings}! It actually was!
                </h3>
                <h3 className="sub-header">“Believe in the person you want to be and then be willing to work for it”</h3>
              </>
            );
          } else if (userFeelings === 'confusing' || userFeelings === 'stressful') {
            return (
              <>
                <h3 className="question-title">
                  {userName}, you aren&apos;t overreacting feeling that last week
                  was {userFeelings}! You&apos;re feeling, and that&apos;s okay!
                </h3>
                <h3 className="sub-header">
                  “Difficult roads often lead to beautiful destinations.”
                </h3>
              </>
            );
          }
        })()}
      </div>

      <div>
        {(() => {
          if (userAloneOrBuddy === 'alone') {
            return (
              <>
                <h3 className="question-title">
                  Working {userAloneOrBuddy} {userHours} hours, has pros and cons. Remember:
                </h3>
                <h3 className="sub-header">“You never walk alone”</h3>
              </>
            );
          } else if (userAloneOrBuddy === 'pair') {
            return (
              <>
                <h3 className="question-title">
                  We are sure you and {userBuddy} made a great job!
                  Don&apos;t forget to demo your project!
                </h3>
                <h3 className="sub-header">
                  “Believe in the person you want to become”
                </h3>
              </>
            );
          }
        })()}
      </div>
    </div>
  )
}

export default UserAnswers

