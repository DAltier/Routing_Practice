import React from 'react';
import { Router } from '@reach/router';

import Home from './Home';
import Hello from './Hello';
import WordColor from './WordColor';

const Main = () => {
  return (
    <div>
      <Router>
        <Home path = "/home" />
        <Hello path = "/:id" />
        <WordColor path = "/:id/:color/:bgColor" />
      </Router>
    </div>
  );
}

export default Main;