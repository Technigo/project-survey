import React from 'react'

const Start = ( {username, setUsername, onStepChange} ) => {
  
  return ( 
   
    <div className='startPage'>
        <div className='startText'>
          <h1>Riddles in the Dark</h1>
          <p>After getting separated from your friends while exploring a deep cave, you wander down a tunnel in the hopes of finding your way back to the surface.</p>
          <p>Instead, the tunnel leads you to a large subterranean lake. As you wander past the stalagmites towards the water, you discover a beautiful golden ring. Yet before you can inspect it too thoroughly, you suddenly hear a gurgling, choking cough from behind you:</p>
          <p>“Gollum! Gollum!”</p>
          <p>Startled, you spin around and find yourself facing a small, skeletal, thin and gaunt creature with large, beady eyes and small strands of pale brown hair.</p>
          <p>“Juicy human-meats,” he croaks, seemingly more to himself than to you, as he studies you intently from top to toe. Gurgling in delight, he exclaims, “We feast tonight, Precious!”</p>
          <p>"Oh dear," you say. "Is there any way we can avoid me getting eaten? Perhaps by successfully answering a series of riddles?</p>  
          <p>“R… riddles, Precious? Yes, yes! Oh, we loves riddles! If human-meats wins, we shows them the way out! And if human-meats loses... we feast on their tasty flesh, Preciousss!”</p>
          <p>"DEAL!" you exclaim. "And my name's not 'human-meats, it's..."</p>
        </div>
        <div className='buttons'>
            <label hidden htmlFor='username_input'>Name</label>
                <input
                    type='text'
                    placeholder='Baggins?'
                    className='username_input'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label hidden htmlFor='startBtn'>Let's do this.</label>
                <button id='startBtn' type='button' onClick={onStepChange}>Let's do this.</button>
        </div>
    </div>
    )
}

export default Start;