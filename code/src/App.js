import React, { useState } from "react";
import { Question1 } from './Question1'
import { Question2} from './Question1'

import { Footer } from './Footer'
import { Button } from './Button'



export const App = () => {
  const [wantsColor, setWantsColor] = useState(false);


  return (


    <div>
      <div className="firstSection">
      <Question1/>

      <form className="chooseColorForm">
      <label>
      Blue
      <input
        type="checkbox"
        checked={wantsColor}
        onChange={event => setWantsColor(event.target.checked)}
        required
      />
     </label>

     <label>
      Yellow
      <input
        type="checkbox"
        checked={wantsColor}
        onChange={event => setWantsColor(event.target.checked)}
        required
      />
     </label>

     <label>
      Red
      <input
        type="checkbox"
        checked={wantsColor}
        onChange={event => setWantsColor(event.target.checked)}
        required
      />
     </label>

     <label>
      Green
      <input
        type="checkbox"
        checked={wantsColor}
        onChange={event => setWantsColor(event.target.checked)}
        required
      />
     </label>

     <label>
     Gray
      <input
        type="checkbox"
        checked={wantsColor}
        onChange={event => setWantsColor(event.target.checked)}
        required
      />
     </label>
     <section className="buttonContainer">
     <Button title="Enter" />
     </section>
    
     </form>

    </div>


    <div className="secondSection">
      <Question2 />
    </div>
    
      <div className="Myfooter">
        <Footer />
      </div>
     
    </div>
  )
}
