import {
  LOAD_FLYERS_FAILURE,
  LOAD_FLYERS_IN_PROGRESS,
  LOAD_FLYERS_SUCCESS,
  TOGGLE_FAVORITE,
  ADVANCE_FLYER_PAGE
} from "./actions";

const initialState = { isLoading: false, data: [], page: 1};


export const flyers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADVANCE_FLYER_PAGE: {
        return {
          ...state,
          page: state.page + 1,
        };
    };
    case LOAD_FLYERS_SUCCESS: {
      const { flyers } = payload;
      return {
        ...state,
        isLoading: false,
        data: state.data.concat(flyers),
      };
    }
    case LOAD_FLYERS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_FLYERS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const favoriteFlyers = (state = { data: []}, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FAVORITE: {
      const { flyer } = payload;
      const isAlreadyFavorite = state.data.some((f) => f.id === flyer.id) ? true : false;
      const newState = isAlreadyFavorite
          ? state.data.filter((f) => f.id != flyer.id)
          : state.data.concat(flyer);
      return {
        data: newState
      };
    }
    default:
      return state;
  }
};