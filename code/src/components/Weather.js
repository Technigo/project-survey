import React from 'react';

const weatherGroup = ['warm', 'winter', 'rainy'];

const Weather = ({ weather, onWeatherChange, onNextChange }) => {
  return (
    <section>
      <form>
        <h2>Radio buttons</h2>
        {weatherGroup.map((group) => (
          <label key={group}>
            <input
              id='weather'
              type='radio'
              value={group}
              onChange={(event) => onWeatherChange(event.target.value)}
              checked={weather === group}
            />
            {group}
          </label>
        ))}
        <button onClick={onNextChange}>Next question</button>
      </form>
    </section>
  );
};

export default Weather;

// use map for WeatherGroup

// {/* Beyonce Section */}
// {section === "beyonce-input" && (
//   <section aria-label="Beyonce input" className="beyonce-input">
//     <BeyonceInput
//       name={adjective}
//       setBeyonce={setBeyonce}
//       id="adjective"
//       onBeyonceChange={onBeyonceChange}
//     />
//     <div className="button-wrapper">
//       <button
//         className="back-button"
//         type="button"
//         value="welcome"
//         onClick={(event) => {
//           setSection(event.target.value);
//         }}
//       >
//         Back
//       </button>
//       <button
//         className="next-button"
//         type="submit"
//         value="identify"
//         onClick={(event) => {
//           setSection(event.target.value);
//         }}
//       >
//         Next
//       </button>
//     </div>
//   </section>
// )}

// i form delen och den övre sektionen ska vara i frågorna
// const onBeyonceChange = (e) => {
//   setBeyonce(e.target.value);
// };

// -------
// const RadioBotton = ({ onCoffeeChange }) => {
//   return (
//     <>
//       <div className="coffee-group">
//         <label htmlFor="coffee">
//           <h1 tabIndex="0" className="radio-heading">
//             How do you like your coffee?
//           </h1>
//         </label>
//         {
// coffeeGroup.map
// ((group) => (
//           <label key={group} label="coffee" className="radio-container">
//             <input
//               name="coffee"
//               className="radio-btn"
//               type="radio"
//               value={group}
//               onChange={onCoffeeChange}
//             />
//             <span tabIndex="0" class="checkmark"></span>
//             {group}
//           </label>
//         ))}
//       </div>
//     </>
//   );
// };
