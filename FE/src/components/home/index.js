import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='container home'>
    <h1>Welcome to MyTaxi</h1>
    <section className='row'>
      <div className='col-ls-6 col-md-6 col-sm-12'>
        <Link to='/mytaxi'>
          <article className='jumbotron'>
            <h2>MyTaxi</h2>
            <i className='fa fa-taxi' aria-hidden='true'></i>
          </article>
        </Link>
      </div>
      <div className='col-ls-6 col-md-6 col-sm-12 car2go'>
        <Link to='/car2go'>
          <article className='jumbotron'>
            <h2>Car2Go</h2>
            <i className='fa fa-taxi' aria-hidden='true'></i>
          </article>
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
