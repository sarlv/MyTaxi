import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyTaxi extends Component {
  state = {
    taxi: null
  }

  constructor(props) {
    super(props);
    props.onMyTaxi();
  }

  componentWillReceiveProps(next) {
    this.setState({
      taxi: next.taxi
    });
  }

  render() {
    const { taxi } = this.state;
    return(
      <div className='container'>
        <h1>MyTaxi page</h1>
        {
          !taxi &&
          <div className='spinner'>
            <i className='fa fa-spinner fa-spin'></i>
          </div>
        }
        <div className='row'>
          {
            taxi &&
            taxi.map(t => (
              <article key={ t.id } className='col-ls-3 col-md-4 col-sm-6'>
                <dl className='jumbotron'>
                  <dt>
                    { t.type }:
                    <span className={ t.state.toLowerCase()}>
                      { t.state }
                    </span>
                  </dt>
                  <dd>
                    { t.coordinate.latitude },
                    { t.coordinate.longitude }
                  </dd>
                </dl>
              </article>
            ))
          }
        </div>
      </div>
    );
  }
}

MyTaxi.propTypes = {
  onMyTaxi: PropTypes.func
};

export default MyTaxi;
