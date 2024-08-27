import React, { useEffect, useState } from "react";
import genreids from "../utilities/genre";
const WatchList = ({ watchList, handleRemoveFromWatchList, setWatchList }) => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleGenreFilter = (genreData) => {
    setCurrGenre(genreData);
  };

  const sortIncrease = () => {
    let sortIncrease = watchList.sort(
      (movieA, movieB) => movieA.vote_average - movieB.vote_average
    );
    setWatchList([...sortIncrease]);
  };

  const sortDecrease = () => {
    let sortDecrease = watchList.sort(
      (movieA, movieB) => movieB.vote_average - movieA.vote_average
    );
    setWatchList([...sortDecrease]);
  };

  useEffect(() => {
    const genreList = watchList.map((movie) => genreids[movie.genre_ids[0]]);
    var tempData = [...new Set(genreList)];
    setGenre(["All Genres", ...tempData]);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genre.map((genreData) => (
          <div
            key={genreData}
            onClick={() => handleGenreFilter(genreData)}
            className={
              currGenre === genreData
                ? "bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] rounded-xl text-white font-semibold cursor-pointer mx-4"
                : "bg-blue-400 flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl cursor-pointer font-semibold mx-4"
            }
          >
            {genreData}
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <input
          placeholder="Search Movies"
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray my-4">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex gap-3 justify-center">
                <div onClick={sortIncrease} className="p-2">
                  <i className="fa fa-arrow-up" />
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecrease} className="p-2">
                  <i className="fa fa-arrow-down" />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter(
                (movie) =>
                  movie.title.toLowerCase().includes(search.toLowerCase()) ||
                  movie.overview.toLowerCase().includes(search.toLowerCase())
              )
              .filter((movie) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movie.genre_ids[0]] === currGenre;
                }
              })
              .map((movie, index) => {
                return (
                  <tr className="border-b-2" key={index}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[8rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      />
                      <div className="mx-10">{movie.title}</div>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{genreids[movie.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchList(movie)}
                      className="text-red-800 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
