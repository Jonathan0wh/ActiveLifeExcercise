import { GET_PAST_CHALLENGE_COMPLETE } from '../actions/types';

const defaultState = {
  available: [],
  past: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'MAKE_CHALLENGE_REQUEST':
      return {
        ...state,
        in_progress: true
      };
    case 'RESET_CHALLENGE_REQUEST':
      return {
        ...state,
        in_progress: false
      };
    case 'GET_CHALLENGES':
      return {
        ...state,
        available: action.payload
      };
    case GET_PAST_CHALLENGE_COMPLETE:
      return {
        ...state,
        past: action.data
      };

    default:
      return state;
  }
};
