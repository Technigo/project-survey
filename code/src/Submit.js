import React from "react";

export const Submit = () => {
  const [submit, setSubmit] = useState();
  return (
    <div>
      <button onClick={() => setSubmit}>Submit</button>
    </div>
  );
};
