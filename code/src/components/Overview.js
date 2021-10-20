import React from "react";

const Overview = ({ traditionInput }) => {
    return (
        <section>
            <h2>Summary</h2>
            <p>Favorite Christmas tradition: {traditionInput}</p>
        </section>
    );
};

export default Overview;