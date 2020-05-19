import { GET_VIDEOS_PENDING, GET_VIDEOS_FULLFILLED, GET_VIDEOS_REJECTED } from '../action';

const videos = (state = { pending: false, data: [], error: null }, action) => {
  switch (action.type) {
    case GET_VIDEOS_PENDING:
      return {
        pending: true,
        error: null,
      };
    case GET_VIDEOS_FULLFILLED:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case GET_VIDEOS_REJECTED:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default videos;
