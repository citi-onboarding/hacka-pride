import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example,
  Slider,
  Guests,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <Guests />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))