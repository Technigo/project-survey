import React from 'react'
import ThemeOne from '../assets/theme-one.png'
import ThemeTwo from '../assets/theme-two.png'
import ThemeThree from '../assets/theme-three.png'
import ThemeFour from '../assets/theme-four.png'
import ThemeFive from '../assets/theme-five.png'


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
            required
          />
        <img src={ThemeOne}/>
      </label>

      <label>
        <input 
            type="radio" 
            name="theme" 
            value="themetwo"
            onChange={handleInput}
            checked={state === 'themetwo'}
            required
          />
        <img src={ThemeTwo}/>
      </label>

      <label>
      <input 
          type="radio" 
          name="theme" 
          value="themethree"
          onChange={handleInput}
          checked={state === 'themethree'}
          required
        />
        <img src={ThemeThree}/>
      </label>

      <label>
        <input 
          type="radio" 
          name="theme" 
          value="themefour"
          onChange={handleInput}
          checked={state === 'themefour'}
          required
        />
        <img src={ThemeFour}/>
      </label>

      <label>
        <input type="radio" 
          name="theme" 
          value="themefive" 
          onChange={handleInput}
          checked={state === 'themefive'}
          required
        />
        <img src={ThemeFive}/>
      </label>

    </div>
  )
}