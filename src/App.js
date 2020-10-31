import React from 'react';

import Main from './components/main/main.component';

import './App.css';
import Header from './components/header/header.component';

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <header>
          <Header />
        </header>
        <section>
          <Main />
        </section>
      </div>
    );
  }
};

export default App;
