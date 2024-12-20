import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFavorite } from "../store/actions/movieActions";

const FavoriteMovieList = (props) => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md dark:bg-slate-800 dark:border-slate-700 ">
      <h5 className="font-bold dark:text-gray-200">Favori Filmler</h5>
      {
        <div className="pt-3 text-sm">
          {favorites.map((movie) => (
            <Link
              key={movie.id}
              className="py-1 flex gap-2 justify-between  dark:text-white"
              to={`/movies/${movie.id}`}
              data-testid="favorite-movie"
            >
              {movie.title}
              <span
                onClick={() => dispatch(removeFavorite(movie.id))}
                className="material-icons hover:text-red-600 text-[18px]"
              >
                remove_circle
              </span>
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default FavoriteMovieList;
