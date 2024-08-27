import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
function App() {
  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movieObj) => {
    let newWatchList = [...watchList, movieObj];
    setWatchList(newWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
  };

  const handleRemoveFromWatchList = (movieObj) => {
    const filteredWatchList = watchList.filter((item) => item.id !== movieObj.id);
    setWatchList(filteredWatchList);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
  };

  useEffect(()=>{
    const moviesFromLocalStorage=localStorage.getItem("moviesApp");
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  },[])

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList} 
                watchList={watchList}/>
              </>
            }
          />
          <Route path="/watchList" element={<WatchList watchList={watchList} setWatchList={setWatchList}  handleRemoveFromWatchList={handleRemoveFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
