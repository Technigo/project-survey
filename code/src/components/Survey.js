import React, { useState } from 'react';
// import Form from "components/XX";


const Survey = () => {
  const [name , setName] = useState(' ');
  
  return (
        <div>
          <h1> Your name is: [name]</h1>
          <button onClick = {() => setName ("Petra")}>Petra</button>
          <button onClick = {() => setName ("Lotta")}>Lotta</button>
          <button onClick = {() => setName ("Ture")}>Ture</button>
         </div>
  );
}
export default Survey;