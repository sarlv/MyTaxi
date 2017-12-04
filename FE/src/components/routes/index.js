import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from '../header';
import Home from '../home';
import MyTaxi from '../../containers/mytaxi';
import Car2Go from '../../containers/car2go';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route exact path='/' component={ Home }/>
      <Route path='/mytaxi' component={ MyTaxi }/>
      <Route path='/car2go' component={ Car2Go }/>
    </div>
  </Router>
)

export default Routes;
