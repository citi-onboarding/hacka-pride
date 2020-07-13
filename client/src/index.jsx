import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <Contact />
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))