import React from 'react';

const Active= ({active, setActive}) => {
    const handleActiveChange = (event) => {
        setActive(event.target.value)
      }
      return (
        <>
        <p> How active do you want to be?</p>

        <form>
        <select
            onChange={event => setActive(event.target.value)}
            value={active}
            >
        <option value="">Select option</option>
        <option value="go hiking">Very Active</option>
        <option value="go sightseeing">Little Active</option>
        <option value="just be lazy doing nothing">I don't want to move att all</option>
        </select>
        </form>
        </>
      )
}

export default Active;