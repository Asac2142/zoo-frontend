import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './components/main/main.component';
import Header from './components/header/header.component';
import Safe from './components/safe-animals/safe-animals.component';
import ReportNewAnimal from './components/report-new-animal/report-new-animal.component';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <header className='header'>
          <Header />
        </header>
        <section className='main'>
          <Switch>
            <Route exact path='/' component={ Main } />
            <Route exact path='/safe' component={ Safe } />
            <Route exact path='/report' component={ ReportNewAnimal } />
          </Switch>
        </section>
      </div>
    );
  }
};

export default App;
