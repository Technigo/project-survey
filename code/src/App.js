import Header from 'components/Header';
import React from 'react'
import Dropdown from './components/Dropdown';
import Radiobutton from './components/Radiobutton';
import Textinput from './components/Textinput';


export const App = () => {
  let title = 'Sweet-o-meter';
  let questionName = "What's your name?"
  let questionAge = "How old are you?"
  let questionSweets = "What's your fav sweet?"

  return (
    <>

      <Header
      title={title}
      />

      <Textinput
      questionName={questionName}
      />

      <Radiobutton
      questionAge={questionAge}
      />

      <Dropdown
      questionSweets={questionSweets}
      />
</>
  );
};

export default App
