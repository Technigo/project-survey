import React from 'react';

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
              <h3 className="sub-header">Let&apos;s go <span className="accent-color">{userTeam}!</span></h3>
            );
          } else if (userTeam === 'Tigers') {
            return (
              <h3 className="sub-header">Make some noice for the <span className="accent-color">{userTeam}!</span></h3>
            );
          } else if (userTeam === 'Foxes') {
            return (
              <h3 className="sub-header">♪ What does the <span className="accent-color">{userTeam}</span> say!?</h3>
            );
          } else if (userTeam === 'Elephants') {
            return (
              <h3 className="sub-header">Pawooooo... said the <span className="accent-color">{userTeam}</span>!</h3>
            );
          } else if (userTeam === 'Hippos') {
            return (
              <h3 className="sub-header">Hipp Hipp, <span className="accent-color">{userTeam}</span>!</h3>
            );
          } else if (userTeam === 'Lions') {
            return (
              <h3 className="sub-header">Like the <span className="accent-color">{userTeam}</span> kings!</h3>
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
                  <span className="accent-white">{userName}</span>, you aren&apos;t overreacting feeling that last week
                  was <span className="accent-white">{userFeelings}</span>! It actually was!
                </h3>
                <h3 className="sub-header quot"><span className="accent-color">“</span> Believe in the person you want to be and then be willing to work for it <span className="accent-color">”</span></h3>
              </>
            );
          } else if (userFeelings === 'confusing' || userFeelings === 'stressful' || userFeelings === 'challenging') {
            return (
              <>
                <h3 className="question-title">
                  <span className="accent-white">{userName}</span>, you aren&apos;t overreacting feeling that last week
                  was <span className="accent-white">{userFeelings}</span>! You&apos;re feeling, and that&apos;s okay!
                </h3>
                <h3 className="sub-header quot">
                  <span className="accent-color">“</span> Difficult roads often lead to beautiful destinations.<span className="accent-color"> ”</span>

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
                  Working <span className="accent-white">{userAloneOrBuddy} {userHours}</span> hours, has pros and cons. Remember:
                </h3>
                <h3 className="sub-header quot"><span className="accent-color">“</span> You never walk alone <span className="accent-color">”</span></h3>
              </>
            );
          } else if (userAloneOrBuddy === 'pair') {
            return (
              <>
                <h3 className="question-title">
                  We are sure you and <span className="accent-white">{userBuddy}</span> made a great job!
                  Don&apos;t forget to demo your project!
                </h3>
                <h3 className="sub-header quot">
                  <span className="accent-color">“</span> Believe in the person you want to become <span className="accent-color">”</span>
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

