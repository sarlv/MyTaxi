import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Car2Go extends Component {
  state = {
    car2go: null
  }

  constructor(props) {
    super(props);
    props.onCar2Go();
  }

  componentWillReceiveProps(next) {
    this.setState({
      car2go: next.car2go
    });
  }

  render() {
    const { car2go } = this.state;
    return(
      <div className='container'>
        <h1>Car2Go page</h1>
        {
          !car2go &&
          <div className='spinner'>
            <i className='fa fa-spinner fa-spin'></i>
          </div>
        }
        {
          car2go &&
          car2go.map(car => (
            <article key={ car.id } className='col-ls-6 col-md-6 col-sm-12'>
              <dl className='jumbotron'>
                <dt className='address' title={ car.address }>{ car.address }</dt>
                <dd><i>coordinates</i>:
                  { car.coordinates[0] },
                  { car.coordinates[1] }
                </dd>
                <dd><i>engineType</i>: { car.engineType }</dd>
                <dd><i>fuel</i>:       { car.fuel }</dd>
                <dd><i>interior</i>:   { car.interior }</dd>
                <dd><i>exterior</i>:   { car.exterior }</dd>
                <dd><i>name</i>:       { car.name }</dd>
                <dd><i>vin</i>:        { car.vin }</dd>
              </dl>
            </article>
          ))
        }
      </div>
    );
  }
}

Car2Go.propTypes = {
  onCar2Go: PropTypes.func
};

export default Car2Go;
