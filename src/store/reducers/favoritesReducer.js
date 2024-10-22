import {
  TOGGLE_FAVORITES,
  ADD_FAVORITES,
  REMOVE_FAVORITES,
} from "../actions/movieActions.js";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      if (state.favorites.find((fav) => fav.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favori) => favori.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default favoriteReducer;
