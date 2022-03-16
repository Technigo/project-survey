import React from "react";

export const checkbox = () => {
  const [WantsNewsletter, setWantsNewsletter] = useState(false);

  return;
  <form>
    <label>
      Newsletter?
      <input
        type="checkbox"
        checked={WantsNewsletter}
        onChange={(event) => setWantsNewsletter(event.target.checked)}
      />
    </label>
  </form>;
};
