import { connect } from 'react-redux';
import Car2Go from '../../components/car2go';
import { onCar2GoRequest } from '../../actions/car2go';

const mapStateToProps = (state) => {
  const { car2go } = state.car2go;
  return { car2go };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCar2Go: () => dispatch(onCar2GoRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Car2Go);
