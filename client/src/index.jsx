import React from 'react';
import ReactDOM from 'react-dom';

import {
  Banner,
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
      <Navbar />
      <Banner />
      <Information />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))