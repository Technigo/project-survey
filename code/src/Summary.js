import React from 'react'

const restart = () => {
    document.location.href = '';
  };

const Summary = ({activityLevel, livingspace, furType}) => {

return (
<>
    <section className="summary">
        
    <h2> The perfect match for you is a dog...</h2>  
    <p tabIndex="0">....that can live in a <span className='bold'>{livingspace}</span> and that is/has <span className='bold'>{furType}.</span> The dog is suitable for the activity level:  <span className='bold'>{activityLevel}</span></p>
   
    {furType === 'short haired' && (
       <>
        <h2> A Chihuahua </h2>
        <img src={require('./assets/chihuahua.jpg')} alt='Chihauhau dog'/>
        </>
    )}
    {furType === 'long haired' && (
        <>
        <h2> An Afghan dog </h2>
        <img src={require('./assets/Afghandog.jpg')} alt='Afghan dog'/>
       </>
    )}
    {furType === 'curly fur' && (
        <>
        <h2> A Poodel </h2>
        <img src={require('./assets/poodel.jpg')} alt='Poodel dog'/>
        </>
    )}
        <button className="restart-button" onClick={restart} type="button">Click to generate a new dog :)</button>
    </section>
 </>   
)}
export default Summary