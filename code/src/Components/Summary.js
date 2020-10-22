import React from 'react'; 

const Summary = (props) => {
    const { name, favoriteSnack, favoriteDrink } = props;

    return (
        <section>
            <h1>Hi there {name}!</h1>
            <p>Your favorite snack is {favoriteSnack}</p>
            <p>Your favorite drink is {favoriteDrink}</p>
        </section>
    );
};

export default Summary