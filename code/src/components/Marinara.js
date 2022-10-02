import React from 'react';

export const Marinara = () => {
  return (
    <>
      <div className="header">
        <h1 className="heading">Marinara</h1>
      </div>
      <div className="recipe-container">
        <div className="recipe-box">
          <div className="recipe-content">
            <div className="ingredients">
              <h2 className="sub-heading">Ingredients</h2>
              <p className="ingredient">2 x 400g cans San Marzano Tomatoes whole</p>
              <p className="ingredient">1 yellow onion minced</p>
              <p className="ingredient">1 small carrot minced</p>
              <p className="ingredient">6 cloves garlic minced</p>
              <p className="ingredient">2-3 tbsp extra virgin olive oil</p>
              <p className="ingredient">1 bay leaf</p>
              <p className="ingredient">15 leaves basil torn</p>
              <p className="ingredient">Sea salt to taste</p>
            </div>
            <div className="instructions">
              <h2 className="sub-heading">Instructions</h2>
              <ol>
                <li>Gently saute chopped garlic in olive oil until soft, add a pinch of salt</li>
                <li>Add the tomatoes, breaking them up at bit in the pot, and bring to
                     simmer
                </li>
                <li>Simmer until the sauce is thick and the tomatoes are falling apart</li>
                <li>Puree until smooth in a blender</li>
                <li>Serve with pasta, gnocchi, oven roasted vegetables or some fresh
                    crusty bread
                </li>
                <li>Add the bay leaf and partially cover with a lid</li>
                <li>Allow the sauce to simmer away on low flame until thick and
                   concentrated in flavor
                </li>
                <li>Turn off the flame and season to your taste with the sea salt</li>
                <li>Stir in the fresh basil leaves and finish it with a drizzle of
                   extra virgin olive oil
                </li>
                <li>Serve with pasta or meats or some fresh crusty bread</li>
              </ol>
              <p className="note">Note: Make sure to stir often,
                making sure the sugars in the tomatoes do not burn
              </p>
              <h2 className="sub-heading">Love Pancetta?</h2>
              <p className="p-norma">Fry pancetta in a separate pan until crispy and add as a topping together with
              chopped basil
              </p>
            </div>
          </div>

          <div className="img-with-text">
            <img
              className="marinara"
              src="tomatoes.jpg"
              alt="Pomodoro in jar" />
            <p className="image-header">How To Store Tomato Sauce:</p>
            <p className="image-text">You can store it in a covered container for up to 1 week in the refrigerator
                or transfer it to freezer safe containers and keep it for 3-4 months if well sealed
            </p>
          </div>
        </div>

      </div>
      <footer className="footer">
        <div className="footer-container">
          <h2 className="footer-heading">Recipe source</h2>
          <p className="footer-text">ciaoflorentina.com/</p>
        </div>
      </footer>
    </>
  )
}
