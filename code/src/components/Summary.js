import React from 'react';

const Summary = ({ 
    username, 
    numberOne, 
    numberTwo, 
    location, 
    ageGroup
}) => {

return (
<h2> 
    It was a dark, dark night. {username} tried to restrain the feeling of panic when  
    walking into the {location}. {numberOne} minutes later and {numberTwo}  {ageGroup}
    and 
     and  
</h2>
)
}

export default Summary;
