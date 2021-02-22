import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WordPage from '../../containers/WordPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={WordPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
