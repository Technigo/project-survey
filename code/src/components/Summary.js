import React from 'react';

const Summary = ({ username, numberOne, numberTwo, location }) => {

return (
<h2> 
    {username}, the result is {numberOne + numberTwo} and {location}
</h2>
)
}

export default Summary;
