import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className='page-header'>
    <ul>
      <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
      <li><NavLink activeClassName='active' to='/mytaxi'>MyTaxi</NavLink></li>
      <li><NavLink activeClassName='active' to='/car2go'>Car2Go</NavLink></li>
    </ul>
  </div>
)

export default Header;
