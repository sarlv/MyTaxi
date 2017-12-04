import { connect } from 'react-redux';
import MyTaxi from '../../components/mytaxi';
import { onMyTaxiRequest } from '../../actions/mytaxi';

const mapStateToProps = (state) => {
  const { taxi } = state.mytaxi;
  return { taxi };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMyTaxi: () => dispatch(onMyTaxiRequest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTaxi);
