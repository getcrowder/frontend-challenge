import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter, Redirect } from 'react-router-dom';

import ErrorPage from '../components/ErrorPage.jsx';
import Event from './Event.jsx';
import Home from './Home.jsx';
import Order from './Order.jsx';
import Root from './Root.jsx';
import SuccessPage from '../components/SuccessPage.jsx';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/order" component={Order} />
            <Route path="/event/:eventId" component={Event} />
            <Route exact path="/success" component={SuccessPage} />
            <Route exact path="/error" component={ErrorPage} />
            <Redirect to="/" />
          </Switch>
        </Root>
      </BrowserRouter>
    );
  }
}
