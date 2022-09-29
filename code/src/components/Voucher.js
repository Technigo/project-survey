import React, { useState } from 'react';

const Voucher = () => {
  return (
    <div className="App">
      <button type="button" onClick={handleFooPress}>Show Foo</button>
      <button type="button" onClick={handleBarPress}>Show Bar</button>
      {isFooVisible && <h1>Foo</h1>}
      {isBarVisible && <h1>Bar</h1>}
    </div>
  );
}

export default Voucher;