import React from 'react'

import Form from './components/Form' 


export const App = () => {
  return (
    <div>
      <picture>
        <source srcset="./images/galaxy.jpg" media="(max-width: 767px)" />
        <source srcset="./images/moon-phases.jpg" media="(max-width: 1199px)" />
        <img class="hero-image" src="./images/moon-phases.jpg" />
      </picture>
      <Form />
    </div>
  )
}
