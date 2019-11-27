import React, { useState } from 'react';
/*import { RadioButton } from './RadioButton';
import { DropDown } from './DropDown';
import { Submit } from './Submit';*/
import { Summary } from './Summary';
import 'Components css/app.css'



const breads = ['Regular', 'Gluten-free'];
const deliveryGroup = ['Eat-in', 'Take Away'];

export const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState(" "); //depending on what you put in your "" it will show inside your input"box"
  const [burger, setBurger] = useState("");
  const [bread, setBread] = useState('');
  const [delivery, setDelivery] = useState();

  return (
    <div>
      {!submitted && (
        <div id="survey" className="survey">
          <form onSubmit={event => event.preventDefault()
            // document.getElementById('survey').style.display = 'none',
            // document.getElementById('review').style.visibility = 'visible'
          }>
            <h1>Welcome {name}!</h1>
            <h2>Place your order here:</h2>
            <section className="nameSection">
              <p>Name:</p>
              <input className="name"
                type="text"
                onChange={event => setName(event.target.value)}
                value={name}
                required
              />
            </section>


            <section className="burgerSection">
              <h4>Your choice of burger:</h4>
              <select className="burgerSelect"
                onChange={event => setBurger(event.target.value)}
                value={burger}
              >
                <option value="">Click to select burger</option>
                <option value="meet">Meet</option>
                <option value="vegan">Vegan</option>
                <option value="Halloumi">Halloumi</option>
              </select>
            </section>

            <section className="breadSection">
              <h4>Your choice of bread:</h4>
              {breads.map(group => (
                <label key={group}>
                  <input
                    type="radio"
                    value={group}
                    onChange={event => setBread(event.target.value)}
                    checked={bread === { group }}
                  />
                  {group}
                </label>
              ))}
            </section>


            <section className="deliverySection">
              <h4>Select Eat in or Take away:</h4>
              {deliveryGroup.map(group => (
                <label key={group}>
                  <input
                    type="radio"
                    value={group}
                    onChange={event => setDelivery(event.target.value)}
                    checked={delivery === { group }}
                  />
                  {group}
                </label>
              ))}
            </section>

            <div className="submit">
              {/* Submit button with onClick event to set value true to submitted */}
              < button onClick={() => setSubmitted(true)} type="submit" > Submit</button >

              {/* //Reacts kind of condition: if submitted then show the following component Summary
        //You could put JSX here instead of in a component too */}


            </div>

          </form>
        </div>
      )
      };

      {submitted && <Summary name={name} burger={burger} bread={bread} group={delivery} />}

    </div >
  );
};



