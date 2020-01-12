import axios from 'axios';

import { config } from '@utils/config';
import {
  GET_PAST_CHALLENGE,
  GET_PAST_CHALLENGE_COMPLETE,
  GET_PAST_CHALLENGE_ERROR
} from './types';

function getPastChallengeStart() {
  return {
    type: GET_PAST_CHALLENGE
  };
}

function getPastChallengeComplete(data) {
  return {
    type: GET_PAST_CHALLENGE_COMPLETE,
    data
  };
}

function getPastChallengeError(error) {
  return {
    type: GET_PAST_CHALLENGE_ERROR,
    error
  };
}

export function getPastChallenge() {
  return function(dispatch) {
    dispatch(getPastChallengeStart());
    axios
      .get(config.API_URL)
      .then(function(response) {
        dispatch(getPastChallengeComplete(response.data));
      })
      .catch(function(error) {
        dispatch(getPastChallengeError(error));
      });
  };
}
