import React, { useState } from 'react';
import Start from 'components/Start/Start';
import Questions from 'components/Questions/Questions';
import End from 'components/End/End';

const App = () => {
  const [page, setPage] = useState('start');
  const [name, setName] = useState('');
  return (
    <div className="App">
      {page === 'start' && (
        <Start nextPage={() => setPage('quiz')} setName={setName} name={name} />
      )}
      {page === 'quiz' && <Questions nextPage={() => setPage('end')} />}
      {page === 'end' && <End nextPage={() => setPage('start')} />}
    </div>
  );
};

export default App;
