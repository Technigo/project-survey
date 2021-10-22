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
                        <p>In some planets around the galaxy
                            army forces from the ligth and the dark side are battling
                            for the control of the galaxy.</p>
                        <p>Finally <span className="result_info">{result.answer2}</span> the
                            leader from the <span className="result_info">{result.answer1}</span> side
                            of the force is getting advantage in all the battles
                            and gaining the control of the galaxy.</p>
                        <p>Meanwhile in the beatiful planet <span className="result_info">{result.answer3}</span> the new
                            captain <span className="result_info">{result.answer6}</span> is
                            planning an attack to the enemy bases now that
                            the <span className="result_info">{result.answer6}</span>'s allies have incremented in <span className="result_info">{result.answer5}</span> soldiers.</p>
                        <p>From now on, the <span className="result_info">{result.answer4}</span> ligth of
                            the new captain's saber will guide this new forces to the victory and finally
                            restore the balance in the galaxy.</p>
                    </h3>
                </div>
            </section>
        </>
    )
}


export default Story