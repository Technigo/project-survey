import React from 'react';

export const Scarpariello = () => {
  return (
    <>
      <div className="header">
        <h1 className="heading">Scarpiarello</h1>
      </div>
      <div className="recipe-container">
        <div className="recipe-box">
          <div className="recipe-content">
            <div className="ingredients">
              <h2 className="sub-heading">Ingredients</h2>
              <p className="ingredient">250 g fresh datterini or cherry tomatoes</p>
              <p className="ingredient">450 g tomato passata</p>
              <p className="ingredient">3-4 tbsp extra virgin olive oil</p>
              <p className="ingredient">1-2 garlic cloves peeled and crushed</p>
              <p className="ingredient">40 g Parmigiano grated (or vegetarian parmesan)</p>
              <p className="ingredient">40 g Pecorino grated (or vegetarian cheese)</p>
              <p className="ingredient">1 handful fresh basil leaves washed and torn into pieces</p>
              <p className="ingredient">1 tsp peperoncino flakes (optional)</p>
              <p className="ingredient">Freshly ground black pepper</p>
              <p className="ingredient">Sea salt</p>
            </div>
            <div className="instructions">
              <h2 className="sub-heading">Instructions</h2>
              <ol>
                <li>Heat the olive oil in a pan and saute the crushed garlic until it
                   starts to soften
                </li>
                <li>Then add peperoncino/chili pepper (optional) and some of the basil</li>
                <li>Add the cherry/datterini tomatoes cut into halves or quarters</li>
                <li>When the tomatoes have softened, pour in the tomato passata</li>
                <li>Simmer for about 15 minutes, remove the garlic and add salt and
                   pepper to taste
                </li>
                <li>Turn the heat to low and add the Parmigiano and pecorino cheese
                   a handful at a time while mixing everything together well.
                    You want the cheese to melt in the hot sauce
                </li>
                <li>Serve immediately with fresh basil leaves and extra cheese if required</li>
              </ol>
              <p className="note">Note: If you are having your sauce with pasta. Cook the pasta a couple of
                 minutes less than necessary for it to be al dente (it will finish cooking in
                  the tomato sauce), drain it and add to the sauce after step 5.
                   Cook both together for 2-3 more minutes until the pasta is cooked
                    before adding the cheese.
              </p>
            </div>
          </div>

          <div className="img-with-text">
            <img
              className="scarpariello"
              src="cheese.jpg"
              alt="Cheese" />
            <p className="image-header">Have some leftovers at home?</p>
            <p className="image-text">Sauce allo scarpariello is a classic traditional recipe from Naples.
             Originally, created to make use of leftover Sunday ragu. So if you have leftovers that
              goes well with tomato and cheese, don&apos;t be shy to throw them in as well!
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
          <p className="footer-text">the-pasta-project.com</p>
        </div>
      </footer>
    </>
  )
}