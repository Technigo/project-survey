import React from 'react';

export const Classic = () => {
  return (
    <>
      <div className="header">
        <h1 className="heading">Classic Pomodoro</h1>
      </div>
      <div className="recipe-container">
        <div className="recipe-box">
          <div className="recipe-content">
            <div className="ingredients">
              <h2 className="sub-heading">Ingredients</h2>
              <p className="ingredient">2 x 400g cans San Marzano Tomatoes whole</p>
              <p className="ingredient">4 cloves chopped garlic</p>
              <p className="ingredient">2-3 tbsp extra virgin olive oil</p>
              <p className="ingredient">Sea salt to taste</p>
              <p className="ingredient">Optional:</p>
              <p className="ingredient">1 tsp crushed red pepper or fresh black pepper</p>
              <p className="ingredient">1/2 dl fresh basil leaves, sliced</p>
            </div>
            <div className="instructions">
              <h2 className="sub-heading">Instructions</h2>
              <ol>
                <li>Gently saute chopped garlic in olive oil until soft, add a pinch of salt</li>
                <li>Add the tomatoes, breaking them up at bit in the pot,
                   and bring to simmer
                </li>
                <li>Simmer until the sauce is thick and the tomatoes are falling apart</li>
                <li>Puree until smooth in a blender</li>
                <li>Serve with pasta, gnocchi, oven roasted vegetables or some fresh
                  crusty bread
                </li>
              </ol>
            </div>
          </div>

          <div className="img-with-text">
            <img
              className="pomodoro"
              src="sauce.jpg"
              alt="Pomodoro in jar" />
            <p className="image-header">How To Store Tomato Sauce:</p>
            <p className="image-text">You can store it in a covered container for up to 1 week in the refrigerator
                or transfer it to freezer safe containers and keep it for 3-4 months if well sealed
            </p>
          </div>
        </div>

        <div className="extra">
          <h3 className="extra-heading">Love Pancetta? </h3>
          <p>Fry pancetta in a separate pan until crispy and add as a topping together with
              chopped basil
          </p>
          <h3 className="extra-heading">Want it more spicy?</h3>
          <p>Saute red pepper flakes with your garlic. I usually go just short of a teaspoon,
            but start small and increase amount according to taste
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <h2 className="footer-heading">Recipe source</h2>
          <p className="footer-text">justalittlebitofbacon.com</p>
        </div>
      </footer>
    </>
  )
}
