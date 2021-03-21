import React, { useEffect, useState } from 'react'
import { filterContructor } from '../helpers/filterContructor'

const RecipesFiltering = ({ questionArray, answerArray, resetQuestion }) => {

  const [showRecipes, setShowRecipes] = useState([])

  const filters = filterContructor(questionArray, answerArray)

  const fecthData = () => {
    const API = `https://api.edamam.com/search?q=${filters}&app_key=dfcd2a65544144df48113524fbe923af&app_id=9e668ccc&from=0&to=20`

    fetch(API)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setShowRecipes(json.hits)
      })
  }

  useEffect(() => {
    fecthData()
  }, [])

  return (

    <div className="container">
      <h1 className="title">Our suggestion for you :</h1>
      <div className="filter-container">
        {
          showRecipes.map((recipe, index) => {
            return (
              <div className="filter-container-2" key={index}>
                < a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                  <div className="image-container">
                    <img src={recipe.recipe.image} alt="recipe-img" />
                  </div>
                  <p>{recipe.recipe.label}</p>
                </a>
              </div>

            )

          })
        }
      </div>
      <button onClick={() => resetQuestion(false)}>New Search</button>
    </div>
  )

}
export default RecipesFiltering;