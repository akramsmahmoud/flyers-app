import {
  loadFlyersInProgress,
  loadFlyersSuccess,
  loadFlyersFailure,
  toggleFavorite,
  advanceFlyerPage,
} from "./actions";

export const loadFlyers = page => async (dispatch) => {
  try {
    dispatch(loadFlyersInProgress());
    
    const response = await fetch(
      `http://localhost:3000/api/v1/flyers?page=${page}&limit=12`
    );
    const flyers = await response.json();
    dispatch(loadFlyersSuccess(flyers));
  } catch (e) {
    dispatch(loadFlyersFailure());
  }
};

export const advancePage = () => async (dispatch) =>{
  dispatch(advanceFlyerPage());
}

export const toggleFavorites = (flyer) => (dispatch) => {
  dispatch(toggleFavorite(flyer));
};