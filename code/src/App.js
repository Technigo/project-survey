import React from 'react'

import { Header}  from './Header.js'
import { Invitation } from './Invitation.js'
import { Osa } from './Osa'

export const App = () => {
  return (
    <>
      < Header />
      < Invitation 
      date = "31 December"
      time = "15.00"
      place = "Gysa"
      />
      < Osa />
    </>
  )
}
