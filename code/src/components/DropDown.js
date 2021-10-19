import React, {useState} from "react";


const DropDown = (props) => {

    const[location, setLocation] = useState("")

    return (
<form>
<select
    onChange={event => setLocation(event.target.value)}
    value={location}
    >
        <option value="">Select location:</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Zurich">Zurich</option>
</select>
<button onClick={props.onStepChange}>next question</button>

</form>
    )


}
export default DropDown;