import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Articles from './pages/Articles/Articles';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/articles' component={Articles}></Route>
    </Switch>
  );
}

export default Main;
