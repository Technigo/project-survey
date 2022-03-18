import React from 'react';

const Summary = ({ 
    username, 
    numberOne, 
    numberTwo, 
    location, 
    ageGroup
}) => {

return (
<p className="ghost-story-text"> 
    It was a dark, dark night. {username} tried to restrain the feeling of panic 
    when walking into the {location}. Lesson learned never again to listen to {ageGroup},
     but they paid well this time and were in charge. 
    The moon suddenly appeared casting long shadows in the form of {numberOne} 
    emerging creeping viscious creatures. With a sigh of relief {username} watched 
    them silently disappear and all was still. 
    A vibration from the ground ripped the stillness and floor apart and {numberTwo} large 
    creatures dragged their way up from the ground.  
</p>
)
}

export default Summary;
