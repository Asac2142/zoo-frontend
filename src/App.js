import React from 'react';

import Main from './components/main/main.component';

import './App.css';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import Safe from './components/safe-animals/safe-animals.component';

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <header>
          <Header />
        </header>
        <section>
          <Switch>
            <Route exact path='/' component={ Main } />
            <Route exact path='/safe' component={ Safe } />
          </Switch>
        </section>
      </div>
    );
  }
};

export default App;
