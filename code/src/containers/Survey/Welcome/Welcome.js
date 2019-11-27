import React from 'react'

const Welcome = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
    props.onNextSite()
  }
  return (
    <section>
      <h1>WELCOME ON OUR SITE!!</h1>
      <p>Cupcake ipsum dolor sit amet gummi
        bears muffin caramels carrot cake.
        Bear claw marshmallow topping gummies lollipop.
        Brownie jujubes I love brownie ice cream pudding. Caramels
        gummi bears muffin jelly chocolate marshmallow jelly beans gummi
        bears toffee. Soufflé jujubes halvah cupcake liquorice. Pastry bonbon
        cake. Gummi bears marshmallow cookie caramels tootsie
        roll lollipop liquorice fruitcake.
      </p>
      <form onSubmit={submitHandler}>
        <button type="submit">LETS START!!</button>
      </form>
    </section>

  )
}

export default Welcome