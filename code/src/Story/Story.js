import React from 'react'
import './Story.css'

const Story = ({ result }) => {

    return (
        <>
            <div className="fade"></div>
            <section class="star-wars">
                <div className="story_container">
                    <h3 className="story_text">
                        <div className="story_title">
                            <p>Episode XXXI</p>
                            <h1>A New New New Hope!</h1>
                        </div>
                        <p>It is a period of civil war.</p>
                        <p>In some planets around the galaxy some
                            army forces from ligth and dark side are wrestling
                            for the control of the galaxy.</p>
                        <p>Finally <span className="result_info">{result.answer2}</span> the
                            leader from <span className="result_info">{result.answer1}</span> side
                            of the force is gettin advantage in all the battles
                            and getting the control of the galaxy.</p>
                        <p>Meanwhile in the beatiful planet <span className="result_info">{result.answer3}</span> the new leader of
                            the rebel forces <span className="result_info">{result.answer6}</span> is
                            planning an attack to enemy bases. Now
                            the arm of alliases have incremented in <span className="result_info">{result.answer5}</span> soldiers.</p>
                        <p>The <span className="result_info">{result.answer4}</span> ligth of
                            the new leader sable will guide this new rebels to the victory to
                            restore the balance in the galaxy.</p>
                    </h3>
                </div>
            </section>
        </>
    )
}


export default Story