import React from 'react';

export const Norma = () => {
  return (
    <>
      <div className="header">
        <h1 className="heading">A lá Norma</h1>
      </div>
      <div className="recipe-container">
        <div className="recipe-box">
          <div className="recipe-content">
            <div className="ingredients">
              <h2 className="sub-heading">Ingredients</h2>
              <p className="ingredient">2 eggplants</p>
              <p className="ingredient">Extra virgin olive oil</p>
              <p className="ingredient">5 garlic cloves, minced</p>
              <p className="ingredient">1 tsp crushed red pepper flakes (optional)</p>
              <p className="ingredient">2 x 400g cans diced tomatoes with their juices</p>
              <p className="ingredient">1 ½ tsp dry oregano</p>
              <p className="ingredient">½ dl chopped fresh parsley</p>
              <p className="ingredient">½ dl grated Ricotta salata</p>
              <p className="ingredient">Sea salt</p>
            </div>
            <div className="instructions">
              <h2 className="sub-heading">Instructions</h2>
              <p>Eggplant:</p>
              <ol>
                <li>Heat the oven to 220 C</li>
                <li>Slice and Salt the Eggplant. Trim the eggplant and partially peel
                  them in a striped pattern (zebra pattern)
                </li>
                <li>Slice them into ½ inch thick rounds</li>
                <li>Season the eggplant slices with sea salt on both sides and lay
                  them flat for a few minutes, up to 30 minutes if you have the time
                </li>
                <li>Wipe the eggplant dry and remove excess salt using a paper towel</li>
              </ol>
              <p>Roast the eggplant:</p>
              <ol>
                <li>Brush the bottom of a large sheet pan (or two) with extra virgin olive oil</li>
                <li>Arrange the eggplant slices in the pans in one single layer, eggplant slices
                   should not overlap, each should be comfortably touching the bottom
                    of the sheet pan
                </li>
                <li>Roast in the heated oven until deeply golden brown, anywhere
                   from 35 to 40 minutes, turning over mid-way through
                </li>
              </ol>
              <p>Sauce:</p>
              <ol>
                <li>Start the sauce while the eggplant is in the oven</li>
                <li>Gently saute chopped garlic in olive oil until soft,
                   add a pinch of salt and optional red pepper flakes
                </li>
                <li>Add the tomatoes, oregano and bring to a simmer</li>
                <li>Simmer until the sauce is thick</li>
                <li>When ready, add the roasted eggplant to sauce</li>
                <li>Add chopped parsley and grated ricotta salata cheese to finish</li>
                <li>Serve with pasta or some fresh crusty bread</li>
              </ol>
              <h2 className="sub-heading">Want a smooth texture?</h2>
              <p className="p-norma">Put the sauce in a blender after step 4 and put back into a pan
             to simmer for 5 min before you add pancetta and cheese
              </p>
            </div>
          </div>

          <div className="img-with-text">
            <img
              className="norma"
              src="eggplant.jpg"
              alt="Eggplant" />
            <p className="image-header">How To Store Tomato Sauce:</p>
            <p className="image-text">You can store it in a covered container for up to 1 week in the refrigerator
                or transfer it to freezer safe containers and keep it for 3-4 months if well sealed
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <h2 className="footer-heading">Recipe source:</h2>
          <p className="footer-text">themediterraneandish.com</p>
        </div>
      </footer>
    </>
  )
}

