import React from 'react';

export const Amatriciana = () => {
  return (
    <>
      <div className="header">
        <h1 className="heading">Amatriciana</h1>
      </div>
      <div className="recipe-container">
        <div className="recipe-box">
          <div className="recipe-content">
            <div className="ingredients">
              <h2 className="sub-heading">Ingredients</h2>
              <p className="ingredient">1 tablespoon extra virgin olive oil</p>
              <p className="ingredient">4-6 ounces pancetta cut into a small or medium dice</p>
              <p className="ingredient">1 small yellow onion (roughly 6-7 ounces) finely diced</p>
              <p className="ingredient">1 teaspoon crushed red pepper flakes or ½ teaspoon, if you prefer less heat</p>
              <p className="ingredient">3 garlic cloves finely sliced</p>
              <p className="ingredient">2 tablespoons tomato paste</p>
              <p className="ingredient">1 (400g) can crushed San Marzano or Italian plum tomatoes tomatoes</p>
              <p className="ingredient">2 tbsp finely grated pecorino romano cheese, plus more for serving</p>
              <p className="ingredient">Freshly ground black pepper</p>
              <p className="ingredient">Sea salt </p>
            </div>
            <div className="instructions">
              <h2 className="sub-heading">Instructions</h2>
              <ol>
                <li>Heat the olive oil over medium heat. Add the pancetta and
                   cook until rendered and crispy, about 5 to 7 minutes
                </li>
                <li>Transfer the pancetta to a plate covered with a psper towel
                   and set aside, leaving any rendered fat behind in the pan
                </li>
                <li>Add the onion, red pepper flakes, and a generous pinch of salt
                   to the pan and cook over medium-low heat, stirring often, until the onions
                    are soft, translucent, and just beginning to gain color, about 5 to 7 minutes
                </li>
                <li>Add the garlic and cook until fragrant, stirring constantly,
                   about 1 to 2 minutes
                </li>
                <li>Add the tomato paste and cook, stirring constantly to prevent
                   scorching, until the tomato paste has started to cook slightly
                    and darken in color
                </li>
                <li>Add the canned tomatoes </li>
                <li>Add reserved crispy pancetta back into the pan and stir the
                   sauce until all of the ingredients are incorporated evenly
                </li>
                <li>Bring the sauce to a simmer and cook for an additional 15 to 20 minutes,
                   seasoning to taste with salt and black pepper
                </li>
                <li>With the pan over low heat, add the pecorino cheese</li>
                <li>Serve with additional finely grated pecorino as desired</li>
                <li>Serve with Bucatini or Rigatoni pasta or some fresh crusty bread</li>
              </ol>
              <p>Note: If you are making pasta, add a generous splash or two of starchy
                 pasta water as needed to help loosen the sauce after you have
                  added the pecorino in step 9
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

        <div className="extra">
          <h3 className="extra-heading">Want a smooth texture?</h3>
          <p>Put the sauce in a blender after step 6 and put back into a pan
             to simmer for 5 min before you add pancetta and cheese
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <h2 className="footer-heading">Recipe source</h2>
          <p className="footer-text">abeautifulplate.com</p>
        </div>
      </footer>
    </>
  )
}
