import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchMovie, toggleFavorites } from "../store/actions/movieActions";

const MovieHeader = (props) => {
  const appTitle = useSelector((state) => state.movie.appTitle);

  const displayFavorites = useSelector(
    (state) => state.favorite.displayFavorites
  );

  const dispatch = useDispatch();

  const handleToggleFavorites = () => {
    dispatch(toggleFavorites());
  };

  const handleChange = (e) => {
    dispatch(searchMovie(e.target.value));
  };

  return (
    <div className="flex justify-between items-center shadow rounded-md bg-white p-2 pl-3 my-3">
      <h2 className="text-zinc-600">{appTitle}</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          onChange={handleChange}
          className="border w-44"
          placeholder="Film Ara"
        />
        <div
          onClick={handleToggleFavorites}
          className="myButton bg-blue-600 hover:bg-blue-500"
        >
          <span>Favorileri {displayFavorites ? "gizle" : "göster"}</span>
        </div>
        <Link to="/movies" className="myButton bg-blue-600 hover:bg-blue-500">
          Tüm filmler
        </Link>
        <Link
          to="/movies/add"
          className="myButton bg-green-700 hover:bg-green-600"
        >
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieHeader;
