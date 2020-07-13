import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example,
  Contact,
} from './components';

function App() {
  return (
    <section className="app">
      <Contact />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))