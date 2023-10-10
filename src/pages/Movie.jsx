import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Movie() {
  const { Title } = useParams();
  const url = `https://www.omdbapi.com/?t=${Title}&apikey=bb1151cd`;
  const { data: movie, isPending, error } = useFetch(url);
  console.log(movie);
  if (isPending) {
    return (
      <span className="loading loading-spinner loading-lg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    );
  }
  return (
    <>
      {movie && (
        <div className="  card lg:card-side bg-base-100 shadow-xl mb-10">
          <figure>
            <img src={movie.Poster} className="h-full" alt="Album" />
          </figure>
          <div className="card-body">
            <h1 className="font-bold text-xl">Name:</h1>
            <h2>{movie.Title}</h2>
            <h1 className="font-bold text-xl">Actors:</h1>
            <h2>{movie.Actors}</h2>
            <h1 className="font-bold text-xl">Country:</h1>
            <h2>{movie.Country}</h2>
            <h1 className="font-bold text-xl">Genre:</h1>
            <h2>{movie.Genre}</h2>
            <h1 className="font-bold text-xl">Year:</h1>
            <h2>{movie.Year}</h2>
            <h1 className="font-bold text-xl">Language:</h1>
            <h2>{movie.Language}</h2>
            <h1 className="font-bold text-xl">BoxOffice:</h1>
            <h2>{movie.BoxOffice}</h2>
            <h1 className="font-bold text-xl">Runtime:</h1>
            <h2>{movie.Runtime}</h2>
            <h1 className="font-bold text-xl">Awards:</h1>
            <h2>{movie.Awards}</h2>
            <div className="card-actions justify-end">
              <Link to={"/"} className="btn btn-outline">
                Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Movie;
