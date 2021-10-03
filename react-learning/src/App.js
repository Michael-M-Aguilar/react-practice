import React from 'react';
import BackwardCounter from './component/BackwardCounter';
import ForwardCounter from './component/ForwardCounter';

function App() {
  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
