import React from 'react';

const Summary = ({username, numberOne, numberTwo }) => {

return (
<h2> 
    {username}, the result is {numberOne + numberTwo}
</h2>
)
}

export default Summary;