import React from 'react';

const Summary = ({ 
    username, 
    firstMonster, 
    secondMonster, 
    location, 
    ageGroup,
    weapon
}) => {

return (
<article className="ghost-story-container"> 
<h2 className="ghost-story-header">And your ghost story goes ...</h2>       
<p className="ghost-story-text"> 
    It was a dark, dark night. {username} tried to restrain the feeling of panic 
    when walking into the {location}. Lesson learned never again to listen to {ageGroup},
     but they paid well for this job and were in charge. </p> 
<p className="ghost-story-text">
    The moon suddenly appeared casting long shadows in the form of {firstMonster} emerging 
    creeping viscious creatures. With a sigh of relief {username} watched 
    them silently disappear and all was again still.</p> 
<p className="ghost-story-text">
   But suddenly a vibration from the ground cut through the air and ripped the
    ground apart and {secondMonster} large creatures dragged their way up from the cracked ground.</p>
<p className="ghost-story-text">     
    {username} felt fear freeze their blood but reached for their {weapon}.</p>

<p className="ghost-story-end-text">
    To be continued... <span role="img" aria-label="skull">💀</span>
    <span role="img" aria-label="candle">🕯️</span></p>

<p className="ghost-story-email-text"> 
    ...if you do, send it to me:</p>
<p className="ghost-story-email-text">
    lundislon@gmail.com <span role="img" aria-label="ghost">👻</span>
    <span role="img" aria-label="pen">🖊️</span>
    <span role="img" aria-label="love letter">💌</span></p> 

<p className="ghost-story-email-text"> 
    since we are out of space now <span role="img" aria-label="ufo">🛸</span></p>
</article>

)
}

export default Summary;
