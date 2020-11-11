import { createSelector } from "reselect";

export const getFlyers = (state) => state.flyers.data;
export const getFavoriteFlyers = (state) => state.favoriteFlyers.data;
export const getFlyersPage = (state) => state.flyers.page;
export const getFlyersLoading = (state) => state.flyers.isLoading;


export const getPublishedFlyers = createSelector(getFlyers, (flyers) =>
  flyers
);
