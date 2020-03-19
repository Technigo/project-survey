import React from "react";
import 'Components/FormStyle.css'

export const FavorQuestion = props => {
    const {provideGroceries, setProvideGroceries} = props;
    const {provideMedication, setProvideMedication} = props;
    const {provideMealDeliveryServices,setProvideMealDeliveryServices} = props; 

    return (
      <section className='question-container'>
        <p>What can you do for your neighbor?</p>
        <label>
          Provide groceries
          <input
          type="checkbox"
          checked={provideGroceries}
          onChange={event => setProvideGroceries(event.target.checked)}
          />
        </label>
        <label>
          Meal delivery services
          <input
          type="checkbox"
          checked={provideMealDeliveryServices}
          onChange={event => setProvideMealDeliveryServices(event.target.checked)}
          />
        </label>
        <label>
          Provide medication
          <input
          type="checkbox"
          checked={provideMedication}
          onChange={event => setProvideMedication(event.target.checked)}
          />
        </label>
      </section>
    )
  }