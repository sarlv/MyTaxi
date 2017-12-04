import { onCar2GoLoaded } from '../../actions/car2go';

export const onCar2Go = (next) => {
  fetch('http://localhost:5000/car2go/vehicles')
    .then(data => data.json())
    .then(data => next(onCar2GoLoaded({
      car2go: data.placemarks
    })));
};
