import React from 'react';
import ReactDOM from 'react-dom';

import {
  Navbar,
  Slider,
  Guests,
  Contact,
  Partners,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <Navbar />
      <Guests />
      <Partners />
      <Contact />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))