import React, {useState} from "react";

const CheckBox = (props) => {
const [wantsNews, setNews] = useState(false);

return (

    <form>
        <label>
            Newsletter
            <input 
            type="checkbox"
            checked={wantsNews}
            onChange={event => setNews(event.target.checked)}
            />
        </label>
        <button onClick={props.onStepChange}>next question</button>

    </form>
    
);

};
export default CheckBox;
/* Remember can have more than one answer */