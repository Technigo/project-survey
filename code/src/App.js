import React from 'react'
import { Radio } from './components/Radio'
import { FavoriteSoap } from './components/FavoriteSoap'
import { DropDown } from './components/DropDown'
import { Button } from './components/Button'


export const App = () => {


    return (
        <div>
            <header>
                <h1>Washing them hands</h1>
            </header>

            <Radio />
            <FavoriteSoap />
            <DropDown />
            <Button />


        </div>

    )


}