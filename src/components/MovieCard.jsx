import React from "react";

const MovieCard = ({
  movieObj,
  handleAddToWatchList,
  watchList,
  handleRemoveFromWatchList,
}) => {
  const isInWatchList = (movieObj) => {
    for (let i = 0; i < watchList.length; i++) {
      if (movieObj.id === watchList[i].id) {
        return false;
      }
    }
    return true;
  };

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})`,
      }}
    >
      {isInWatchList(movieObj) ? (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-4 flex justify-center h-6 w-8 itens-center rounded-xl bg-gray-900/60"
        >
          &#128525;
        </div>
      ) : (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 flex justify-center h-6 w-8 itens-center rounded-xl bg-gray-900/60"
        >
         &#10060;
        </div>
      )}

      <div className="text-white  text-xl w-full p-2 text-center bg-gray-900/60">
        {movieObj.title}
      </div>
    </div>
  );
};

export default MovieCard;
