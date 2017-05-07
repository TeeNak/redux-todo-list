import * as ReactRedux from 'react-redux';
import * as Actions from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(Actions.setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = ReactRedux.connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink;
