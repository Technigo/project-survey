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
    {username}, 
    the result is {numberOne + numberTwo} 
    and {location} 
     and  {ageGroup}
</h2>
)
}

export default Summary;
