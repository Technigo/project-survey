import React from 'react'

const SideDish = (props) =>  {

    const [setSideDish, SideDish] = [props.setSideDish, props.sideDish]

    return (
        <form>
            <select
              onChange={event => setSideDish(event.target.value)}
              value = {SideDish}
        >
            <option value="">What is your go-to side dish?</option>
            <option value="pasta">Leafy greens</option>
            <option value="meat">French fries</option>
            <option value="seitan">Beans and onion salad</option>
            </select>
        </form>
    );
}
export default SideDish;