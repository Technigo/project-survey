import React from "react"
import './overview.css'

const Overview = ({ traditionInput, treeInput, foodInput, movieInput }) => {
    return (
        <><section className="overview">
            <h2>Summary</h2>
            <p className="summary-p">Favorite Christmas tradition: {traditionInput}</p>
            <p className="summary-p">Christmas tree preference: {treeInput}</p>
            <p className="summary-p">Favorite Christmas food/treat: {foodInput}</p>
            <p className="summary-p">Best Christmas movie: {movieInput}</p>
        </section>
        <div>
            <h3>Have yourself a Merry little Christmas!</h3>
        </div></>
    )
}

export default Overview