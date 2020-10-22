import React from 'react';




const Submit = ({ submit, setSubmit }) => {

  return (

    <div className="submit">
      <button onClick={() => setSubmit(true)}
        type="submit" value="Submit"> Submit</button>
    </div>



  );


};

export default Submit