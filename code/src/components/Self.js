import React from 'react';

// const traitList = [
//   'No-nonsense',
//   'Warm & welcoming',
//   'Relaxed to the max',
//   'A go-getter'
// ]

export const Self = ({ self, setSelf }) => {
  const handleSelfSelection = (event) => {
    setSelf(event.target.value)
  }
  return (
    <>
      I consider myself to be
      <select value={self} onChange={handleSelfSelection}>
        <option disabled value="">Please select one:</option>
        <option value="no nonsense">no-nonsense</option>
        <option value="warm and welcoming">warm & welcoming</option>
        <option value="relaxed to the max">relaxed to the max</option>
        <option value="a go getter">a go-getter</option>
      </select>
      {/* {traitList.map((traits) => (
        <label htmlFor="self-question" key={traits}>
          <input
            id="self-question"
            type="radio"
            value={traits}
            onChange={(event) => setSelf(event.target.value)}
            checked={self === traits} />
          {traits}
        </label>
      ))} */}
    </>
  )
}