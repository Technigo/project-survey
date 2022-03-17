import React from 'react'
import logo from 'assets/snitch.png'

const Summary = ({nameInput, qualityInput, homeInput, spellInput, likeInput}) => {


  const likeAnswer = (likeInput) => {
    return (likeInput >= 5) ? 'blablabla'
    : 'blibli'}
  
    
    return(
        <section className="questionWrapper">
        <div className="question">
        <img src={logo}
        className="icon"
        alt="snitch icon"/>
        <h3>Hello <span className="dormitoryTag">{nameInput}</span> aka <span className="dormitoryTag">{qualityInput}</span>!</h3>
        <p className="summaryTag">In which dormitory do you belong?</p>
        <p>I belong in <span className="dormitoryTag">{homeInput}</span>!</p>
        <p className="summaryTag">What is your favourite spell?</p>
        <p>My favourite spell is <span className="dormitoryTag">{spellInput}</span>.</p>
        <p className="summaryTag">And finally, how much do you love Harry Potter?</p>
        <p>{likeAnswer({likeInput})}
         
            
            </p>
    </div>
    </section>
    )      
}

export default Summary