import React from 'react'


const FormSelect = () => {

  return (
    <div>
      <form>
        <label for='something'>Pick your favorite fruit:</label>
        <select id='something' name='something'>
          <option value='' ></option>
          <option value='Kiwi'>Kiwi</option>
          <option value='Coconut'>Coconut</option>
          <option value='Mango'>Mango</option>
          <option value='Grapefruit'>Grapefruit</option>
          <option value='Pineapple'>Pineapple</option>
        </select>
      </form>

    </div>
  )
}

export default FormSelect
