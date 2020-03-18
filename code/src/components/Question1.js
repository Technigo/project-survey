import React, { useState } from 'react'
//import { App } from 'App'

export const Question1 = () => {
  const [animal, setAnimal]= useState("Cockroach")
  
  const handleSubmit = event => {
  event.preventDefault()
}
  
  return(
    <form onSubmit={handleSubmit} >
      <label>
        <select
          onChange={event => setAnimal(event.target.value)}
          value = {animal}
        >
    
          <option value ="">What would be the coolest animal to scale up to the size of a horse?</option>
    
          <option value ="">Cockroach</option>
          <option value ="">Tick</option>
          <option value ="">Rat</option>
    
    
    
    
        </select>
    </label>
  </form>
    )
  }

  // class FlavorForm extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {value: 'coconut'};
  
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //   }
  
  //   handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }
  
  //   handleSubmit(event) {
  //     alert('Your favorite flavor is: ' + this.state.value);
  //     event.preventDefault();
  //   }
  
  //   render() {
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <label>
  //           Pick your favorite flavor:
  //           <select value={this.state.value} onChange={this.handleChange}>
  //             <option value="grapefruit">Grapefruit</option>
  //             <option value="lime">Lime</option>
  //             <option value="coconut">Coconut</option>
  //             <option value="mango">Mango</option>
  //           </select>
  //         </label>
  //         <input type="submit" value="Submit" />
  //       </form>
  //     );
  //   }
  // }