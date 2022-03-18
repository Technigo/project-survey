import React from 'react';

const QuestionSurprice = ({wantsSurprice, setWantsSurprice}) => {
    // const [wantsSurprice, setWantsSurprice] = useState(false)

    return (
        <div className="question-box">
            <h2>Question 3</h2>  
            <form>
                <lable>
                    Tick if you want a surprice: 
                    <input
                        type="checkbox"
                        checked={wantsSurprice}
                        onChange={event => setWantsSurprice(event.target.checked)}
                    />
                </lable>
            </form>
        </div>
    )
}

export default QuestionSurprice