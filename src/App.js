import { useState,useEffect } from "react";
import React from 'react';
import './App.css';
import MovieCards from './components/MovieCards';
import MovieHead from "./components/MovieHead";
import Search from "./components/Search";
import AddToFav from './components/AddToFav';
import RemoveFromFav from './components/RemoveFromFav';



function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('') 
  const [favorites, setFavorites] = useState([])

  const searchMovies = async (searchTerm) => {
    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=b7d61375`;
    const res = await fetch(url);
    const data = await res.json()

    if (data.Search) {
      setMovies(data.Search)
    }
  }

  useEffect(() => {
    searchMovies('avengers')
  }, [])

  useEffect(() => {
    searchMovies(searchTerm)
  }, [searchTerm])

  useEffect(() => {
    const favoriteMovies = JSON.parse
    (localStorage.getItem('favorites'))
    if (favoriteMovies) {
      setFavorites(favoriteMovies)
    }
  }, [])

  const saveToLocalStorage = (favArray) => {
    localStorage.setItem('favorites', JSON.stringify(favArray))
  }

  const addMovieToFav = (movie) => {
    const favArray = [...favorites, movie]
    setFavorites(favArray)
    saveToLocalStorage(favArray)
  }

  const RemoveMovieFromFav = (movie) => {
    const favArray = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID)
    setFavorites(favArray)
    saveToLocalStorage(favArray)
  }

  const containers = document.querySelectorAll("#main");
    for (let i = 0; i < containers.length; i++) {
      let container=containers[i]
      container.addEventListener("wheel", function (e) {
				if (e.deltaY > 0) {
				container.scrollLeft += 100;
				e.preventDefault();
				}
				else {
				container.scrollLeft -= 100;
				e.preventDefault();
				}
			});      
    }

  return (
    <div className="container">
      <div className="container-head">
        <MovieHead heading = 'Movies' />
        <Search value={searchTerm} setValue={setSearchTerm} />
      </div>
      <div id="main" className="row">
        <MovieCards 
        movies={movies}
        alterfav={AddToFav}  
        handleClick={addMovieToFav} 
        />
      </div>
      <div className="container-head">
        <MovieHead heading = 'Favorites' />
      </div>
      <div id="main" className="row">
          {favorites.length > 0 
          ? <MovieCards
            key={movies.imdbID}
            movies={favorites}
            alterfav={RemoveFromFav}    
            handleClick={RemoveMovieFromFav}        
          />
          : <p className="empty">Your favorite movies will be displayed here</p>}
        </div>
    </div>
  );
}

export default App;
