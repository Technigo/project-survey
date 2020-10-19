import React from 'react'; 

const Summary = (props) => {
    const { name, favoriteSnack } = props;

    return (
        <section>
            <h1>Hey {name}!</h1>
            <p>Your favorite snack is {favoriteSnack}</p>
            {console.log(favoriteSnack)}
        </section>
    )
}

export default Summary