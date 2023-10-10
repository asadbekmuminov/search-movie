import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState(
    "https://www.omdbapi.com/?t=joker&apikey=56d18197"
  );
  const { data: movies, isPending, error } = useFetch(url);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const searchMovie = () => {
    setUrl("https://www.omdbapi.com/?t=" + inputValue + "&apikey=bb1151cd");
    setInputValue("");
  };
  if (isPending) {
    return (
      <span className="loading loading-spinner loading-lg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
    );
  }
  return (
    <>
      {movies && (
        <div className="flex flex-col items-center">
          <div className="mx-auto flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search"
              className="input input-bordered w-full max-w-xs mx-auto mb-5 mr-5"
            />
            <button onClick={searchMovie} className="btn btn-outline">
              Search
            </button>
          </div>
          <div className="card w-full lg:card-side bg-base-100 shadow-xl  mb-10">
            <figure>
              <img src={movies.Poster} alt="Movie" />
            </figure>
            <div className="card-body w-1/2 flex flex-col justify-between w-1/2">
              <div>
                <h2 className="card-title mx-auto font-bold text-4xl mb-5">
                  {movies.Title}
                </h2>
                <h1>
                  <span className="font-bold">Country: </span>
                  {movies.Country}
                </h1>
                <h1>
                  <span className="font-bold">Genre: </span>
                  {movies.Genre}
                </h1>
                <h1>
                  <span className="font-bold">Year: </span>
                  {movies.Year}
                </h1>
                <h1>
                  <span className="font-bold">Runtime: </span>
                  {movies.Runtime}
                </h1>
              </div>

              <div className="card-actions justify-end">
                <Link
                  to={`/movie/${movies.Title}`}
                  className="btn btn-neutral ml-auto"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
