import React from 'react'

const MainDish = (props) => {

    const [setMainDish, MainDish] = [props.setMaindish, props.mainDish]

    return (
        <form>
            <select
              onChange={event => setMainDish(event.target.value)}
              value = {MainDish}
        >
            <option value="">Select your preferred main dish</option>
            <option value="pasta">Pasta</option>
            <option value="meat">Meat</option>
            <option value="seitan">Seitan</option>
            </select>
        </form>
    );
};

export default MainDish;