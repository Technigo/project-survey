import React from 'react';

const Intro = () => {

  return (
    <>
      <h1>Welcome to Find-a-Friend!</h1>
      <p>Here at <span className="bold"> Find-a-Friend</span> we believe in second chances, and that dog truly is mans best friend.
      We help homeless dogs find (and start!) new families through our cooperation with dog shelters all around the world. 
      Fill in our survey to start your journey on finding your new best friend!</p> 
      
      <div>
        <img className='start-image' src='/images/dog.jpg' alt='Dog with person'/>
      </div>
    </>
    );
}

  export default Intro