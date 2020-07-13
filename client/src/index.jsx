import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example,
  Navbar,
  Contact,
  Footer,
} from './components';

function App() {
  return (
    <section className="app">
      <Navbar />
      <Contact  style="margin-top: 200px;"/>
      <Footer />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))