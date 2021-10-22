import React from "react"
import './overview.css'

const Overview = ({ traditionInput, treeInput, foodInput, movieInput }) => {
    return (
        <section className="overview">
            <h2>Summary</h2>
            <p className="summary-p">Favorite Christmas tradition: 
            <strong>{traditionInput}</strong></p>
            <p className="summary-p">Christmas tree preference:<br/> 
            <strong>{treeInput}</strong></p>
            <p className="summary-p">Favorite Christmas food/treat:<br/> 
            <strong>{foodInput}</strong></p>
            <p className="summary-p">Best Christmas movie:<br/> 
            <strong>{movieInput}</strong></p>
            <h3>Thank you!</h3>
        </section>
    )
}

export default Overview