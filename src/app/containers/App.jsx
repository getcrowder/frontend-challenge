import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';

import Root from './Root.jsx';
import Home from './Home.jsx';
import Event from './Event.jsx';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/event/:eventId" component={Event} />
            <Redirect to="/" />
          </Switch>
        </Root>
      </BrowserRouter>
    );
  }
}
