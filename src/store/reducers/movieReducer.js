import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
} from "../actions/movieActions.js";
import movies from "../../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case DELETE_MOVIE:
      return {
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case SEARCH_MOVIE:
      const query = action.payload.toLowerCase();
      return {
        ...state,
        filteredMovies: query
          ? state.movies.filter((movie) =>
              movie.title.toLowerCase().includes(query)
            )
          : state.movies,
      };
    default:
      return state;
  }
};

export default movieReducer;
