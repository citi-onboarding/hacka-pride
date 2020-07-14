import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example,
  Slider,
  Guests,
  Contact,
  Footer,
  Test
} from './components';

function App() {
  return (
    <section className="app">
      <Slider />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))