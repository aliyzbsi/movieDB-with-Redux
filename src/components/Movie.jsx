import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { addFavorites, deleteMovie } from "../store/actions/movieActions";

const Movie = (props) => {
  const { id } = useParams();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const movie = movies.find((movie) => movie.id === Number(id));

  const handleDelete = (movieId) => {
    dispatch(deleteMovie(movieId));
    push("/movies");
  };
  const handleAddFavorites = (movie) => {
    dispatch(addFavorites(movie));
    push("/");
  };
  if (!movie) {
    return <div>Film bulunamadı!</div>;
  }
  return (
    <div className="bg-white rounded-md shadow flex-1 dark:bg-slate-800 dark:text-white">
      <div className="p-5 pb-3 border-b border-zinc-200">
        <h4 className="text-xl font-bold">{movie.title} Detayları</h4>
      </div>
      <div className="px-5 py-3">
        <div className="py-1 flex">
          <div className="view-label">İsim</div>
          <div className="flex-1">{movie.title}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Yönetmen</div>
          <div className="flex-1">{movie.director}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Tür</div>
          <div className="flex-1">{movie.genre}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Metascore</div>
          <div className="flex-1">{movie.metascore}</div>
        </div>
        <div className="py-1 flex">
          <div className="view-label">Açıklama</div>
          <p className="flex-1">{movie.description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
        <button
          onClick={() => handleDelete(movie.id)}
          type="button"
          className="myButton bg-red-600 hover:bg-red-500 dark:bg-red-200 dark:hover:bg-red-400 dark:text-slate-800"
        >
          Sil
        </button>
        <button
          onClick={() => handleAddFavorites(movie)}
          className="myButton bg-blue-600 hover:bg-blue-500 dark:bg-blue-200 dark:hover:bg-blue-400 dark:text-slate-800"
        >
          Favorilere ekle
        </button>
      </div>
    </div>
  );
};

export default Movie;
