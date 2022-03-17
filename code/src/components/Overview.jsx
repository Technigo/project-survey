import React from "react"
import './overview.css'

const Overview = ({ favoriteInput, locationInput, djInput, festivalInput, vibesInput }) => {
    return (
        <section className="overview">
            <h1 className="summary-title">Summary</h1>
            <p className="summary-p">Favorite EDM genre: {favoriteInput}</p>
            <p className="summary-p">Festival location preference: {locationInput}</p>
            <p className="summary-p">Favorite DJ: {djInput}</p>
            <p className="summary-p">Best festival: {festivalInput}</p>
            <p className="summary-p">Amount of GOOD VIBES: {vibesInput}!</p>
            <h2 className="summary-bye">Thank you!</h2>
        </section>
    )
}

export default Overview