import { combineReducers } from 'redux';
import { mytaxi } from './mytaxi';
import { car2go } from './car2go';

const reducers = combineReducers({
  mytaxi,
  car2go
});

export default reducers;
