import React from 'react';

const Summary = ({ name, question2, question3, question4, handleStepIncrese }) => {
  const feelingsAnswer = () => {
    if (question3 === 'happy') {
      return '😊'
    } else if (question3 === 'sad') {
      return '😢'
    } else if (question3 === 'angry') {
      return '😡'
    } else if (question3 === 'hungry') {
      return '🤤'
    } else if (question3 === 'tired') {
      return '😴'
    } else if (question3 === 'confused') {
      return '🤯'
    }
  }

  const tomorrowAnswer = () => {
    if (question4 === 'working') {
      return 'go to work! 💪 '
    } else if (question4 === 'studying') {
      return 'get even smarter! 🧠 '
    } else if (question4 === 'away') {
      return 'escape from eveything! 😎 '
    } else if (question4 === 'unicorn') {
      return 'go get a unicorn! 🦄 '
    } else if (question4 === 'bath') {
      return 'clean yourself! 🧼 '
    } else if (question4 === 'restaurant') {
      return 'get some fine dining! 👩🏽‍🍳 '
    } else if (question4 === 'workout') {
      return 'get your sweat on! 🏋️ '
    } else if (question4 === 'other') {
      return 'do other things with your life! 🙃 '
    }
  }

  const tomorrowPicture = () => {
    // Images by catalyststuff on Freepik
    if (question4 === 'working') {
      return 'https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=1060&t=st=1664551522~exp=1664552122~hmac=94d2a5670158564d0a2bb27017c3c498e2d03fac3ee2d4a96c320158461e2da1'
    } else if (question4 === 'studying') {
      return 'https://img.freepik.com/free-vector/brain-cartoon-vector-icon-illustration-education-object-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3559.jpg?w=1060&t=st=1664551371~exp=1664551971~hmac=51e713054898bca7eee942435f78a49eee68e084ba6573e698941e94cc01ec19'
    } else if (question4 === 'away') {
      return 'https://img.freepik.com/free-vector/rocket-flying-moon-cartoon-vector-icon-illustration-technology-transportation-icon-isolated_138676-5157.jpg?w=1060&t=st=1664551420~exp=1664552020~hmac=3c29aee23405267e4f2a9528b9dfedf5d176145440bd777ebdbbd5078b0f970f'
    } else if (question4 === 'unicorn') {
      return 'https://img.freepik.com/free-vector/cute-unicorn-floating-with-balloon-cartoon-vector-icon-illustration-animal-love-icon-concept-flat-cartoon-style_138676-2591.jpg?w=1060&t=st=1664551011~exp=1664551611~hmac=a29c0fbc1b38de701edf6486cd7df74919c12ab7e862562ab041dab52bf33e36'
    } else if (question4 === 'bath') {
      return 'https://img.freepik.com/free-vector/cute-astronaut-summer-floating-beach-with-balloon-cartoon-illustration-science-summer-concept-flat-cartoon-style_138676-2006.jpg?w=1060&t=st=1664551872~exp=1664552472~hmac=bae4d74e82f9baec6c09797360ec41465ce962dd69dd7f37103690eab3996420'
    } else if (question4 === 'restaurant') {
      return 'https://img.freepik.com/free-vector/cute-cool-pizza-slice-wearing-glasses-cartoon-vector-icon-illustration-food-holiday-icon-isolated_138676-4808.jpg?w=1060&t=st=1664551562~exp=1664552162~hmac=af40e33110c0470af2191c23aa12d10ffca45c13dcd01503e7894d5e0a42126d'
    } else if (question4 === 'workout') {
      return 'https://img.freepik.com/free-vector/cool-astronaut-with-baseball-bat-jacket-cartoon-vector-icon-illustration-science-sport-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3320.jpg?w=1060&t=st=1664551470~exp=1664552070~hmac=768780da486434b4ced8ec338a548cf3e5233f63a3493a20fb211c2cb431de0d'
    } else if (question4 === 'other') {
      return 'https://img.freepik.com/free-vector/cute-sloth-yoga-cartoon-icon-illustration_138676-2250.jpg?w=1060&t=st=1664551446~exp=1664552046~hmac=a7a1a2c95ecb47d94bb1f2e339f4e5a70dca7ae25e739c485cb4fcc1b071fbf4'
    }
  }

  return (
    <form>
      <label htmlFor="nameInput" className="summary">
        <div className="summary-text">
          <p>Ok, {name}.</p>
          <p>So {question2} gets you {feelingsAnswer()} and makes you want to {tomorrowAnswer()}</p>
        </div>
        <img src={tomorrowPicture()} alt="" />
      </label>

      <div>
        <button type="submit" id="submitBtn" onClick={(event) => handleStepIncrese(event, true)}>Submit</button>
      </div>
    </form>
  );
}

export default Summary;