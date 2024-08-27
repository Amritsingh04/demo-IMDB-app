import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
const Movies = ({handleAddToWatchList,handleRemoveFromWatchList,watchList}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=fc2ee99462b927a02a1f2d9b9c050e8b&language=en-US&page=${pageNo}`
      )
      .then(function (resp) {
        console.log(resp.data.results);
        setMovies(resp.data.results);
      });
  }, [pageNo]);

  const handlePrev = () => {
    pageNo === 1 ? setPageNo(pageNo) : setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div className="p-5">
      <div className="text-2xl m-2 font-bold text-center mb-5">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movObj) => (
          <MovieCard
            key={movObj.id}
            movieObj={movObj}
            watchList={watchList}
            handleAddToWatchList={handleAddToWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Movies;
