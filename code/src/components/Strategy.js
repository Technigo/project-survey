import React from "react"
import Tft from "./games/tft.jpg"
import AgeOfEmpires from "./games/age.jpg"
import Hearthstone from "./games/hearthstone.jpg"


export const Strategy = () => {
    return(

        <div className="game-container">
            <a href="https://euw.leagueoflegends.com/en/featured/events/teamfight-tactics" target="blank" rel="noreferrer noopener"> 
                <img src={Tft} alt="Team fight tactics"/>
                <p>Team Fight Tactics</p>
            </a>
            <a href="https://steamcommunity.com/app/813780" target="blank" rel="noreferrer noopener"> 
                <img src={AgeOfEmpires} alt="Age of Empires"/>
                <p>Age of Empires</p>
            </a>
            <a href="https://playhearthstone.com/en-us" target="blank" rel="noreferrer noopener"> 
                <img src={Hearthstone} alt="Hearthstone"/>
                <p>Hearthstone</p>
            </a>
        </div>
    )
}