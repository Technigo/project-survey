import React from "react"
import ResidentEvil from "./games/residentevil.jpg"
import Valheim from "./games/valheim.jpg"
import Minecraft from "./games/minecraft.jpeg"

export const Survival = () => {
    return (
        <div className="game-container">
            <a href="https://steamcommunity.com/app/883710" target="blank" rel="noreferrer noopener"> 
                <img src={ResidentEvil} alt="Resident Evil"/>
                <p>Resident Evil</p>
            </a>
            <a href="https://store.steampowered.com/app/892970/Valheim/" target="blank" rel="noreferrer noopener"> 
                <img src={Valheim} alt="Valheim"/>
                <p>Valheim</p>
            </a>
            <a href="https://www.minecraft.net/sv-se" target="blank" rel="noreferrer noopener"> 
                <img src={Minecraft} alt="Minecraft"/>
                <p>Minecraft</p>
            </a>
        </div>
    )
} 