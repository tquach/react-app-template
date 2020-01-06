import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../styles/style.scss';

class App extends Component {
  render() {
    return (
      <main data-theme="default">
        <div className="container container--full-width">
          <div className="nav" />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return 'Hello, world!';
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
