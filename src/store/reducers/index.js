import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoritesReducer';

export const rootReducers = combineReducers({
  movie: movieReducer,
  favorite: favoriteReducer,
});
