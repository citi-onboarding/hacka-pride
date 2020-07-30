import React from 'react';
import ReactDOM from 'react-dom';

import {
  Navbar,
  Slider,
  Information,
  Guests,
  Contact,
  Partners,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <Information />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))