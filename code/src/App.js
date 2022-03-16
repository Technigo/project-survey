import React from "react";
import Form from "./components/Form";

export const App = () => {
  return (
    <main>
      <Form />
    </main>
  );
};

// import React, { useState } from "react";

// export const App = () => {
//   const [name, setName] = useState("");
//   return (
//     <form onSubmit={(event) => event.preventDefault()}>
//       <input
//         type="text"
//         onChange={(event) => setName(event.target.value)}
//         value={name}
//       />
//     </form>
//   );
// };
