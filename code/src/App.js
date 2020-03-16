import React from 'react'
import { DogOrCat } from './Components/DogOrCat'
import { ChooseVacation } from './Components/ChooseVacation'
import { FavoriteFood } from 'Components/FavoriteFood'
import { Button } from 'Components/Button'


export const App = () => {
  return (
    <div>
      <DogOrCat />
      <ChooseVacation />
      <FavoriteFood />
      <Button />
    </div>
  )
}
