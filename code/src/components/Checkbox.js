import React from 'react';

export const Checkbox = ({ wantsNewsletter, setWantsNewsletter, askQuestion }) => {
  //const [wantsNewsletter, setWantsNewsletter] = useState(false);
  //const [wantsNewsletter, setWantsNewsletter] = props;
  return (
    <div className="">
      <label>
        {askQuestion}
        <input 
          type="checkbox"
          checked={wantsNewsletter}
          onChange={event => setWantsNewsletter(event.target.checked)}
        />
      </label>
    </div>
  );
};