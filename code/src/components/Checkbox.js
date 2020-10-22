import React from 'react';

export const Checkbox = ({ wantsNewsletter, setWantsNewsletter }) => {
  //const [wantsNewsletter, setWantsNewsletter] = useState(false);
  //const [wantsNewsletter, setWantsNewsletter] = props;
  return (
    <div className="">
      <label>
        Sign up to newsletter?
        <input 
          type="checkbox"
          checked={wantsNewsletter}
          onChange={event => setWantsNewsletter(event.target.checked)}
        />
      </label>
    </div>
  )
};