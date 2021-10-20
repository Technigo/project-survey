import React from "react"
import Lol from "./games/lol.jpg"
import Dota from "./games/dota.jpg"
import Hots from "./games/hots.jpg"

export const Moba = () => {
    return(

        <div className="game-container">
            <a href="https://www.leagueoflegends.com/en-gb/" target="blank" rel="noreferrer noopener"> 
                <img src={Lol} alt="League Of Legends"/>
                <p>League Of Legends</p>
            </a>
            <a href="https://www.dota2.com/home" target="blank" rel="noreferrer noopener"> 
                <img src={Dota} alt="Dota 2"/>
                <p>Dota 2</p>
            </a>
            <a href="https://heroesofthestorm.com/en-us/" target="blank" rel="noreferrer noopener"> 
                <img src={Hots} alt="Heroes Of The Storm"/>
                <p>Heroes Of The Storm</p>
            </a>
        </div>
    )
}