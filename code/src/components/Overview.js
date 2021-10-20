import React from "react";

const Overview = ({ traditionInput, treeInput, foodInput, movieInput }) => {
    return (
        <section ClassName="overview">
            <h2>Summary</h2>
            <p>Your favorite Christmas tradition: {traditionInput}</p>
            <p>Christmas tree preference: {treeInput}</p>
            <p>Your favorite Christmas food/treat: {foodInput}</p>
            <p>Best Christmas movie: {movieInput}</p>
            <h3>Thank you and have yourself a Merry little Christmas!</h3>
        </section>
    );
};

export default Overview;