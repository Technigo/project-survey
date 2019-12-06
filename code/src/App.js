import React, { useState } from 'react';
import { Summary } from './Summary';
import 'Components_css/app.css';



const breads = ['Regular', 'Gluten-free'];
const deliveryGroup = ['Eat-in', 'Take-Away']; //la till ett bindestreck på TAke-away ev kommer det bli fel ngnstans

export const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState(" "); //depending on what you put in your "" it will show inside your input"box"
  const [burger, setBurger] = useState("");
  const [bread, setBread] = useState('');
  const [delivery, setDelivery] = useState();
  const [question, setQuestion] = useState('name');

  // This function makes the continue button go from one question to the next
  const handleContinueClick = () => {
    // console.log('click continue')
    if (question === 'name') {
      setQuestion('burger')
    } else if (question === 'burger') {
      setQuestion('group')
    } else if (question === 'group') {
      setQuestion('deliver')
    }
  }



  return (
    <div className="background">
      {/***  {!submitted && ( makes the code disapere when the submit button is clicked and answer is shown ***/}
      {!submitted && (

        <div id="survey" className="survey">
          <form onSubmit={event => event.preventDefault()}>
            <h1>Welcome {name}!</h1>
            <h2>Place your order here:</h2>

            {question === 'name' && (
              <section className="nameSection">
                <p>Name:</p>
                <input className="name"
                  type="text"
                  onChange={event => setName(event.target.value)}
                  value={name}
                  required
                />
              </section>
            )}

            {question === 'burger' && (
              <section className="burgerSection">
                <h4>Your choice of burger:</h4>
                <select className="burgerSelect"
                  onChange={event => setBurger(event.target.value)}
                  value={burger}
                >
                  <option value="">Click to select</option>
                  <option value="beef">Beef</option>
                  <option value="vegan">Vegan</option>
                  <option value="Halloumi">Halloumi</option>
                </select>
              </section>
            )}

            {question === 'group' && (
              <section className="breadSection">
                <h4>Your choice of bread:</h4>
                {breads.map(group => (
                  <label key={group}>
                    <input
                      type="radio"
                      value={group}
                      onChange={event => setBread(event.target.value)}
                      checked={bread === group}
                    />
                    {group}
                  </label>
                ))}
              </section>
            )}

            {question === 'deliver' && (
              <div>

                <section className="deliverySection">
                  <h4>Select Eat in or Take away:</h4>
                  {deliveryGroup.map(deliver => (
                    <label key={deliver}>
                      <input
                        type="radio"
                        value={deliver}
                        onChange={event => setDelivery(event.target.value)}
                        checked={delivery === deliver}
                      />
                      {deliver}
                    </label>
                  ))}
                </section>

                <div className="submit">
                  < button onClick={() => setSubmitted(true)} type="submit" > Submit</button >
                </div>

              </div>
            )}


            {question !== 'deliver' && (
              <button type="button" onClick={handleContinueClick}>
                Continue
              </button>
            )}

          </form>
        </div>
      )
      };

{submitted && <Summary name={name} burger={burger} bread={bread} delivery={delivery} />}

    </div >
  );
};



