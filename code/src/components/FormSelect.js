import React, {useState} from 'react'


const FormSelect = (props) => {

  const {fruit, setFruit} = props

  const onFruitChange = (event)=> {
    setFruit(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor='fruit'>Pick your favorite fruit:</label>
        <select id='fruit' onChange={onFruitChange} value={fruit}>
          <option disabled ></option>
          <option >Kiwi</option>
          <option >Coconut</option>
          <option >Mango</option>
          <option >Grapefruit</option>
          <option >Pineapple</option>
        </select>
      </form>

    </div>
  )
}

export default FormSelect
