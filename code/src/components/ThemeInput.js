import React from 'react'
import ThemeOne from '../assets/theme-one.png'
import ThemeTwo from '../assets/theme-two.png'
import ThemeThree from '../assets/theme-three.png'
import ThemeFour from '../assets/theme-four.png'
import ThemeFive from '../assets/theme-five.png'

import '../theme.css'

export const ThemeInput = ({state, handleInput}) => {
  return (
    <div className='theme-wrapper'>
      <label>
        <input 
            type="radio" 
            name="theme" 
            value="themeone"
            onChange={handleInput}
            checked={state === 'themeone'}
            className='theme'
            required
          />
        <img src={ThemeOne} alt="color theme for gift card"/>
      </label>

      <label>
        <input 
            type="radio" 
            name="theme" 
            value="themetwo"
            onChange={handleInput}
            checked={state === 'themetwo'}
            className='theme'
            required
          />
        <img src={ThemeTwo} alt="color theme for gift card"/>
      </label>

      <label>
      <input 
          type="radio" 
          name="theme" 
          value="themethree"
          onChange={handleInput}
          checked={state === 'themethree'}
          className='theme'
          required
        />
        <img src={ThemeThree} alt="color theme for gift card"/>
      </label>

      <label>
        <input 
          type="radio" 
          name="theme" 
          value="themefour"
          onChange={handleInput}
          checked={state === 'themefour'}
          className='theme'
          required
        />
        <img src={ThemeFour} alt="color theme for gift card"/>
      </label>

      <label>
        <input type="radio" 
          name="theme" 
          value="themefive" 
          onChange={handleInput}
          checked={state === 'themefive'}
          className='theme'
          required
        />
        <img src={ThemeFive} alt="color theme for gift card"/>
      </label>

    </div>
  )
}