import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Root from './Root.jsx';
import Home from './Home.jsx';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
          </Switch>
        </Root>
      </BrowserRouter>
    );
  }
}
