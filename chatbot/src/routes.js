import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import App from './App';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;