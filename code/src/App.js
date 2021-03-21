import React from 'react';

import Form from './components/Form';

const App = () => {
  return (
    <div aria-live="polite" aria-relevant="all">
      <main aria-label="Sushi survey" className="main" >
        <Form />
      </main>
    </div>
  );
};

export default App;