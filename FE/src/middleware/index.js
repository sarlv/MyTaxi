import {
  ON_MYTAXI_REQUEST,
  ON_CAR2GO_REQUEST
} from '../const';
import { onMyTaxi } from './mytaxi';
import { onCar2Go } from './car2go';

const before = (action, next) => {
  switch (action.type) {
  case ON_MYTAXI_REQUEST:
    onMyTaxi(next);
    break;
  case ON_CAR2GO_REQUEST:
    onCar2Go(next);
    break;
  default:
    return {};
  }
};

const after = () => {};

const eventsMiddleware = ({ getState }) => next => (action) => {
  before(action, next);
  after(getState);
  return next(action);
};

export default eventsMiddleware;
