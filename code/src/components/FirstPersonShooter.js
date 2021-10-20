import React from "react"
import Halo from "./games/halo.jpeg"
import Fortnite from "./games/fortnite.jpg"
import HalfLife from "./games/half-life.jpg"

export const FirstPersonShooter = () => {
    return (
        <div className="game-container">
            <a href="https://steamcommunity.com/app/976730" target="blank" rel="noreferrer noopener"> 
                <img src={Halo} alt="halo"/>
                <p>Halo</p>
            </a>
            <a href="https://www.epicgames.com/fortnite/en-US/home" target="blank" rel="noreferrer noopener"> 
                <img src={Fortnite} alt="Fortnite"/>
                <p>Fortnite</p>
            </a>
            <a href="https://steamcommunity.com/app/70" target="blank" rel="noreferrer noopener"> 
                <img src={HalfLife} alt="Half-Life"/>
                <p>Half-Life</p>
            </a>
        </div>
    )
}