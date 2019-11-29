import React, { useState } from 'react'
// import tree1 from 'images/tree1.jpeg'
// import tree2 from 'images/tree2.jpeg'
import tree3 from 'images/tree3.jpeg'
import tree4 from 'images/tree4.jpeg'
import tree5 from 'images/tree5.jpeg'
import tree6 from 'images/tree6.jpeg'

export const Form = () => {
  const [name, setName] = useState('')
  const [decoration, setDecoration] = useState('')
  const [enjoysChristmas, setEnjoysChristmas] = useState(false)
  const [ageGroup, setAgeGroup] = useState()
  const [showSummary, setShowSummary] = useState(false) // False because we don't want to show summary to start with
  const [preferredImage, setPreferredImage] = useState()


  const ageGroups = [
    "0-18",
    "19-29",
    "30-39",
    "40-49",
    "50+"
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)//On submit we want to show the summary
  }


  const imageToShow = () => {
    if (preferredImage === "tree3") {
      return (<div className="image-box1"
        style={{ backgroundImage: `url(${tree3})` }}
        aria-label="Image of Christmas tree with eyes">
      </div>)
    } else if (preferredImage === "tree4") {
      return (
        <div className="image-box2"
          style={{ backgroundImage: `url(${tree4})` }}
          aria-label="Image of Christmas tree with Santa Clause's">
        </div>
      )
    } else if (preferredImage === "tree5") {
      return (
        <div className="image-box3"
          style={{ backgroundImage: `url(${tree5})` }}
          aria-label="Image of spruce tree in a field">
        </div>
      )
    } else if (preferredImage === "tree6") {
      return (
        <div className="image-box4"
          style={{ backgroundImage: `url(${tree6})` }}
          aria-label="Image of palm tree">
        </div>
      )
    }

  }

  return (
    <div>
      {/*If the first is true - everything after && will render*/}
      {showSummary && (<div className="summary">
        <h1>Summary:</h1>
        <br></br>
        {enjoysChristmas ? 'You love christmas, yey!' : 'Ok, so you are obviously a grinch!'}
        <br></br>
        You answered that {decoration} is your decoration of choice and that you've celebrated Christmas around {ageGroup} times!
        <br></br>
        Well, {name} to you too!
        <br></br>
        <br></br>
        May your Christmas tree look like this:
{imageToShow()}
      </div>
      )}

      {/*If summary is not shown (if showSummary is false), then form is shown*/}
      {!showSummary &&
        (

          <form onSubmit={handleSubmit}>

            <div className="header">
              <h1>Survey about Christmas</h1>
              <hr></hr>
            </div>

            {/* QUESTION 1 */}
            <div className="radio-buttons">
              How many times have you celebrated Christmas?
{ageGroups.map(group => (
                <label key={group}>
                  <input
                    type="radio"
                    value={group}
                    onChange={event => setAgeGroup(event.target.value)}
                    checked={ageGroup === group}
                  />
                  <span className="fakeRadio"></span>
                  {group}
                </label>
              ))}
            </div>

            <hr></hr>

            {/* QUESTION 2 */}
            <div className="textinput-div">
              <label>How do you say Merry Christmas in your language?
<input
                  type="text"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
              </label>
            </div>
            <hr></hr>

            {/* QUESTION 3 */}
            <div className="select-div">
              <label>Favourite Christmas decoration:
      <select
                  onChange={event => setDecoration(event.target.value)}
                  value={decoration}
                >
                  <option value="">Select decoration:</option>
                  <option value="christmas tree">Christmas trees</option>
                  <option value="advent candles">Advent candles</option>
                  <option value="poinsettia flower">Poinsettia flowers</option>
                  <option value="star lamp">Star lamps</option>
                  <option value="nothing">I said I don't celebrate christmas!</option>
                </select>
              </label>
            </div>

            <hr></hr>

            {/* QUESTION 4 */}
            <div className="checkbox-div">
              <label>
                Enjoy Christmas?
<input
                  type="checkbox"
                  checked={enjoysChristmas}
                  onChange={event => setEnjoysChristmas(event.target.checked)}
                />
                <span className="fakeCheckbox"></span>
              </label>
            </div>

            <hr></hr>

            {/* QUESTION 5 */}
            Which Christmas tree is the most beautiful?
            <div className="images">

              <label>
                <input type="radio"
                  value="tree3"
                  onChange={() => setPreferredImage("tree3")}
                  checked={preferredImage === "tree3"}
                ></input>
                <div className="image-box1"
                  style={{ backgroundImage: `url(${tree3})` }}
                  aria-label="Image of Christmas tree with eyes">
                </div>
              </label>


              <label>
                <input type="radio"
                  value="tree4"
                  onChange={() => setPreferredImage("tree4")}
                  checked={preferredImage === "tree4"}
                ></input>
                <div className="image-box2"
                  style={{ backgroundImage: `url(${tree4})` }}
                  aria-label="Image of Christmas tree with Santa Clause's">
                </div>
              </label>


              <label>
                <input type="radio"
                  value="tree5"
                  onChange={() => setPreferredImage("tree5")}
                  checked={preferredImage === "tree5"}
                ></input>

                <div className="image-box3"
                  style={{ backgroundImage: `url(${tree5})` }}
                  aria-label="Image of spruce tree in a field">
                </div>
              </label>


              <label>
                <input type="radio"
                  value="tree6"
                  onChange={() => setPreferredImage("tree6")}
                  checked={preferredImage === "tree6"}
                ></input>

                <div className="image-box4"
                  style={{ backgroundImage: `url(${tree6})` }}
                  aria-label="Image of palm tree">
                </div>
              </label>
            </div>


            {/*SUBMIT-BUTTON*/}
            < button type="submit" > Submit</button>
          </form >

        )
      }

    </div >




  )
}

//  {/* IMAGE QUESTION */}
//  Which tree is the most beautiful in your opinion?

//  {images.map(image => (<label key={image}>
//                <div className="image-boxes">
//                  <input
//                    type="radio"
//                    value={image}
//                    onChange={() => setPreferredImage({ image })}
//                    checked={preferredImage === image}
//                  />
//                  {image}
//                </div>
//              </label>
//              ))}




//SEVERAL CHECKBOXES//
// const interests = [
//   "Coding",
//   "Cooking",
//   "Canoeing",
//   "Crosswords",
// ]

// export const Interests = () => {
//   const [interestedIn, setInterestedIn] = useState(false)
//   return (
//     <form>
//       Interested in:
//       {interests.map(interest => (
//         <label key={interest}>
//           <input
//             type="checkbox"
//             name={interest}
//             value={interest}
//             checked={interestedIn}
//             onChange={event => setInterestedIn(event.target.checked)}
//           />
//         </label>
//       ))}
//     </form>
//   )
// }



// const images = [
//   <img src={tree1} alt="Christmas tree with presents" height="200px"></img>,
//   <img src={tree2} alt="Christmas tree with lights" height="200px"></img>,
//   <img src={tree3} alt="Christmas tree with candy in it" height="200px"></img>,
//   <img src={tree4} alt="Christmas tree with presents underneath" height="200px"></img>,
//   <img src={tree5} alt="Spruce tree in a field" height="200px"></img>,
//   <img src={tree6} alt="Palm tree" height="200px"></img>,
// ]