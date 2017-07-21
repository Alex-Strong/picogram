import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/main';
import About from './pages/about';
import Err from './pages/error';
import Login from './pages/login';

class Picogram extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/error' component={Err} />

      </Router>
    );
  }
}

export default Picogram;
