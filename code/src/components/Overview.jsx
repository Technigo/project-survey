import React from "react";

const Overview = ({ alias, weapon, companion }) => {

    return (
        <section>
            <h2>Your avatar: </h2>
            <p>Is called {alias} and together with your partner in crime {companion} and your {weapon} you will now go on an adventure</p>
        </section>
    )
}

export default Overview