import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');

    default:
      break;
  }
  return state;
};
