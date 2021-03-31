import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Articles from './pages/Articles/Articles';
import Piece1 from './pages/Articles/Content/Piece1/Piece1';
import Piece2 from './pages/Articles/Content/Piece2/Piece2';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/articles' component={Articles}></Route>
      <Route exact path='/articles/building-portfolio' component={Piece1}></Route>
      <Route exact path='/articles/first-hackathon' component={Piece2}></Route>
    </Switch>
  );
}

export default Main;
