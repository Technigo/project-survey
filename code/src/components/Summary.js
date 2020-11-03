import React from 'react'

export const Summary = (props) => {
    
return(
    
    <div className="container">
    <section>
   
<div className="mad-lib">
<div className="header">The madest lib</div>
<div className="mad-text">
            <p> It´s time for</p>
             <div className="line">{props.holiday}</div>
             <p>  and it´s </p>
             <div className="line">  {props.nameOne}</div>
        <p> ´s favorit holiday! Last year he was</p>
      <div className="line">{props.costumeOne}</div>
      <p> . But for this year he wanted to be a
        bit cooler so he will dress up as a </p>
        <div className="line">{props.costumeTwo}</div>
      <p>. He hope to get alot of</p>
        <div  className="line">{props.food}</div>
     <p> when 
        "</p>
        <div  className="line">{props.hustle}</div>
         or treating".  And he really doesn´t want
         <div  className="line">{props.things}</div>
              , like last year.
        But if so, he will throw
        <div  className="line">{props.thingsTwo}</div>
         all over the place. No one wants to come between him and his
         <div  className="line">{props.food}</div>
            , or els he will say:
            <div  className="line">{props.phrase}</div>
          </div>
          </div>
    </section>
  
  </div>

)}
