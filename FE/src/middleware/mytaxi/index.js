import { onMyTaxiLoaded } from '../../actions/mytaxi';

export const onMyTaxi = (next) => {
  fetch('http://localhost:5000/mytaxi/vehicles')
    .then(data => data.json())
    .then(data => next(onMyTaxiLoaded({
      taxi: data.poiList
    })));
};
