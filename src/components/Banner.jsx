import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[15vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)",
      }}
    >
      <div className="text-white text-xl text-center w-full bg-gray-900/60 p-4">
        {" "}
        Avengers End Game
      </div>
    </div>
  );
};

export default Banner;
