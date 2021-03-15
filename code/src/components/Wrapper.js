import React from 'react'

import Hero from './HeroImage'
import Input from './Input'
import Select from './Select'
import Radio from './RadioButton'
import Checkbox from './Checkbox'

const Wrapper = () => {
    return (
            <form action="http://httpbin.org/anything" method="POST">
                <input type="text" name="message" />

                <select name="tshirtSize">
                    <option value="s">Small</option>
                    <option value="m">Medium</option>
                    <option value="l">Large</option>
                </select>

                <button type="submit">Order t-shirt</button>
            </form>

    )
}

export default Wrapper