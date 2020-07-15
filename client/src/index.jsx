import React from 'react';
import ReactDOM from 'react-dom';

import {
  Example,
  Contact,
  Footer,
  Partners
} from './components';

function App() {
  return (
    <section className="app">
      <Partners />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))