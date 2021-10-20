import React from 'react'
import './Story.css'
// {
// answer1: "dark", 
// answer2: "Darth Maul",
// answer3: Tatooine}
// answer4: white (color sable)
// answer5: 30000 (allies)
// }

const Story = ({ result }) => {

    return (
        <>
            <div className="fade"></div>
            <section class="star-wars">
                <div className="story_container">
                    <h3 className="story_text">
                        <div class="title">
                            <p>Episode XXXI</p>
                            <h1>A New New New Hope!</h1>
                        </div>
                        <p>It is a period of civil war.</p>
                        <p>In some planets around the galaxy some
                            army forces from ligth and dark side are wrestling
                            for the control.</p>
                        <p>The leader from <strong>{result.answer1}</strong> side of the force are winning
                            all the battles. </p>
                        <p>Finally <strong>{result.answer2}</strong> is gettin get advantage
                            to get the control of the galaxy.</p>
                        <p>Meanwhile in <strong>{result.answer3}</strong> the leader of the rebel forces "name"
                            have an arm of <strong>{result.answer5}</strong> alliases.</p>
                        <p>The <strong>{result.answer4}</strong> ligth of
                            the leader sable guide this new rebels to the victory to
                            restore the balance in the galaxy.</p>
                    </h3>
                </div>
            </section>
        </>
    )
}


export default Story