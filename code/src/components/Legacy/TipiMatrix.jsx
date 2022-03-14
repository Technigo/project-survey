import React, { useState } from 'react'

const TipiMatrix = () => {

    const [q1Answer, q1Question] = useState(0);
    const [q2Answer, q2Question] = useState(0);
    const [q3Answer, q3Question] = useState(0);
    const [q4Answer, q4Question] = useState(0);
    const [q5Answer, q5Question] = useState(0);
    const [q6Answer, q6Question] = useState(0);
    const [q7Answer, q7Question] = useState(0);
    const [q8Answer, q8Question] = useState(0);
    const [q9Answer, q9Question] = useState(0);
    const [q10Answer, q10Question] = useState(0);
    
    return (
        <>
            <h1>Personality Inventory</h1>
            <h2>Here are a number of personality traits that may or may not apply to you. Please write a number next to each statement to indicate the extent to which <span className="underline">you agree or disagree with that statement.</span> You should rate the extent to which the pair of traits applies to you, even if one characteristic applies more strongly than the other.</h2>
            <div className="grid-header">
            <div className="header-item">
            </div>
            <div className="header-item">
                <p>
                    <span>Disagree </span>
                    <span>strongly</span>
                </p>
                <p>1</p>
            </div>
            <div className="header-item">
                 <p>
                    <span>Disagree </span>
                    <span>moderately</span>
                </p>
                <p>2</p>
            </div>
            <div className="header-item">
            <p>
                    <span>Disagree </span>
                    <span>a little</span>
                </p>
                <p>3</p>
            </div>
            <div className="header-item">
                <p>
                    <span>Neither agree </span>
                    <span>nor disagree</span>
                </p>
                <p>4</p>
            </div>
            <div className="header-item">
                <p>
                    <span>Agree </span>
                    <span>a little</span>
                </p>
                <p>5</p>
            </div>
            <div className="header-item">
                <p>
                    <span>Agree </span>
                    <span>moderately</span>
                </p>
                <p>6</p>
            </div>
            <div className="header-item">
                <p>
                    <span>Agree </span>
                    <span>strongly</span>
                </p>
                <p>7</p>
            </div>
        </div>
            <div className="grid-row">
            <div className="flex-label">
                <p className="underline">
                    I see myself as...
                </p>
                </div>
                <div className="flex-label"></div>
                <div className="flex-label"></div>
                <div className="flex-label"></div>
                <div className="flex-label"></div>
                <div className="flex-label"></div>
                <div className="flex-label"></div>
                <div className="flex-label"></div>
            </div>
            <div className="grid-row">
                <div className="flex-label">
                    <p>
                    <span>Extraverted, </span>
                    <span>enthusiastic.
                    </span>
                </p>
                <span></span>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q1Question(event.target.value)} value={1} name="tipi-1">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q1Question(event.target.value)} value={2} name="tipi-1">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q1Question(event.target.value)} value={3} name="tipi-1">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q1Question(event.target.value)} value={4} name="tipi-1">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q1Question(event.target.value)} value={5} name="tipi-1">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q1Question(event.target.value)} value={6} name="tipi-1">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q1Question(event.target.value)} value={7} name="tipi-1">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Critical, quarrelsome.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q2Question(event.target.value)} value={7} name="tipi-2">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q2Question(event.target.value)} value={6} name="tipi-2">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q2Question(event.target.value)} value={5} name="tipi-2">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q2Question(event.target.value)} value={4} name="tipi-2">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q2Question(event.target.value)} value={3} name="tipi-2">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q2Question(event.target.value)} value={2} name="tipi-2">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q2Question(event.target.value)} value={1} name="tipi-2">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Dependable, self-disciplined.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q3Question(event.target.value)} value={1} name="tipi-3">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q3Question(event.target.value)} value={2} name="tipi-3">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q3Question(event.target.value)} value={3} name="tipi-3">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q3Question(event.target.value)} value={4} name="tipi-3">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q3Question(event.target.value)} value={5} name="tipi-3">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q3Question(event.target.value)} value={6} name="tipi-3">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q3Question(event.target.value)} value={7} name="tipi-3">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Anxious, easily upset.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q4Question(event.target.value)} value={7} name="tipi-4">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q4Question(event.target.value)} value={6} name="tipi-4">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q4Question(event.target.value)} value={5} name="tipi-4">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q4Question(event.target.value)} value={4} name="tipi-4">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q4Question(event.target.value)} value={3} name="tipi-4">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q4Question(event.target.value)} value={2} name="tipi-4">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q4Question(event.target.value)} value={1} name="tipi-4">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Open to new experiences, complex.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q5Question(event.target.value)} value={1} name="tipi-5">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q5Question(event.target.value)} value={2} name="tipi-5">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q5Question(event.target.value)} value={3} name="tipi-5">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q5Question(event.target.value)} value={4} name="tipi-5">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q5Question(event.target.value)} value={5} name="tipi-5">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q5Question(event.target.value)} value={6} name="tipi-5">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q5Question(event.target.value)} value={7} name="tipi-5">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Reserved, quiet.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q6Question(event.target.value)} value={7} name="tipi-6">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q6Question(event.target.value)} value={6} name="tipi-6">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q6Question(event.target.value)} value={5} name="tipi-6">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q6Question(event.target.value)} value={4} name="tipi-6">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q6Question(event.target.value)} value={3} name="tipi-6">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q6Question(event.target.value)} value={2} name="tipi-6">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q6Question(event.target.value)} value={1} name="tipi-6">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Sympathetic, warm.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q7Question(event.target.value)} value={1} name="tipi-7">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q7Question(event.target.value)} value={2} name="tipi-7">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q7Question(event.target.value)} value={3} name="tipi-7">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q7Question(event.target.value)} value={4} name="tipi-7">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q7Question(event.target.value)} value={5} name="tipi-7">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q7Question(event.target.value)} value={6} name="tipi-7">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q7Question(event.target.value)} value={7} name="tipi-7">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Disorganized, careless.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q8Question(event.target.value)} value={7} name="tipi-8">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q8Question(event.target.value)} value={6} name="tipi-8">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q8Question(event.target.value)} value={5} name="tipi-8">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q8Question(event.target.value)} value={4} name="tipi-8">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q8Question(event.target.value)} value={3} name="tipi-8">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q8Question(event.target.value)} value={2} name="tipi-8">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q8Question(event.target.value)} value={1} name="tipi-8">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Calm, emotionally stable.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q9Question(event.target.value)} value={1} name="tipi-9">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q9Question(event.target.value)} value={2} name="tipi-9">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q9Question(event.target.value)} value={3} name="tipi-9">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q9Question(event.target.value)} value={4} name="tipi-9">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q9Question(event.target.value)} value={5} name="tipi-9">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q9Question(event.target.value)} value={6} name="tipi-9">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q9Question(event.target.value)} value={7} name="tipi-9">
                        </input><span></span>
                    </label>
            </div>

            <div className="grid-row">
                <div className="flex-label">
                <p>Conventional, uncreative.</p>
                </div>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q10Question(event.target.value)} value={7} name="tipi-10">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q10Question(event.target.value)} value={6} name="tipi-10">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q10Question(event.target.value)} value={5} name="tipi-10">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q10Question(event.target.value)} value={4} name="tipi-10">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q10Question(event.target.value)} value={3} name="tipi-10">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q10Question(event.target.value)} value={2} name="tipi-10">
                        </input><span></span>
                    </label>
                    <label className="flex-item">
                        <input type="radio" onChange={(event) => q10Question(event.target.value)} value={1} name="tipi-10">
                        </input><span></span>
                    </label>
            </div>
            {/* <h2>Q1 Answer = {q1Answer}</h2>
            <h2>Q2 Answer = {q2Answer}</h2>
            <h2>Q3 Answer = {q3Answer}</h2>
            <h2>Q4 Answer = {q4Answer}</h2>
            <h2>Q5 Answer = {q5Answer}</h2>
            <h2>Q6 Answer = {q6Answer}</h2>
            <h2>Q7 Answer = {q7Answer}</h2>
            <h2>Q8 Answer = {q8Answer}</h2>
            <h2>Q9 Answer = {q9Answer}</h2>
            <h2>Q10 Answer = {q10Answer}</h2> */}
            {console.log(q1Answer)}
            {console.log(typeof q1Answer)}
            <h3>Extraversion = {(parseInt(q1Answer, 10) + parseInt(q6Answer, 10)) / 2}</h3>
            <h3>Agreeableness = {(parseInt(q2Answer, 10) + parseInt(q7Answer, 10)) / 2}</h3>
            <h3>Conscientiousness = {(parseInt(q3Answer, 10) + parseInt(q8Answer, 10)) / 2}</h3>
            <h3>Emotional Stability = {(parseInt(q4Answer, 10) + parseInt(q9Answer, 10)) / 2}</h3>
            <h3>Openness to Experiences = {(parseInt(q5Answer, 10) + parseInt(q10Answer, 10)) / 2}</h3>
        </>
    )
}

export default TipiMatrix