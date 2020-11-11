export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const toggleFavorite = (flyer) => ({
  type: TOGGLE_FAVORITE,
  payload: { flyer },
});

export const ADVANCE_FLYER_PAGE = "ADVANCE_FLYER_PAGE";
export const advanceFlyerPage = () => ({
  type: ADVANCE_FLYER_PAGE,
});

export const LOAD_FLYERS_IN_PROGRESS = "LOAD_FLYERS_IN_PROGRESS";
export const loadFlyersInProgress = () => ({
  type: LOAD_FLYERS_IN_PROGRESS,
});

export const LOAD_FLYERS_SUCCESS = "LOAD_FLYERS_SUCCESS";
export const loadFlyersSuccess = (flyers) => ({
  type: LOAD_FLYERS_SUCCESS,
  payload: { flyers },
});

export const LOAD_FLYERS_FAILURE = "LOAD_FLYERS_FAILURE";
export const loadFlyersFailure = () => ({
  type: LOAD_FLYERS_FAILURE,
});
