export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};
export const addMovie = (movie) => {
  return { type: ADD_MOVIE, payload: movie };
};
export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITES };
};
export const addFavorites = (movie) => {
  return { type: ADD_FAVORITES, payload: movie };
};
export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITES, payload: id };
};
export const searchMovie = (query) => {
  return {
    type: SEARCH_MOVIE,
    payload: query,
  };
};
