import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routed from './component/router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="" exact component={Routed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
