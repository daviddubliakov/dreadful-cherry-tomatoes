import React, { useEffect, useMemo, useReducer, useState } from "react";
import debounce from "lodash.debounce";

import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";

import { MovieData, MovieRes } from "../../typings/movies";

import styles from "./PopularMovies.module.scss";

const initialState = {
  default: null,
  currentPage: 1,
  currentMovies: null,
  filteredMovies: null,
  searchValue: "",
};

const PopularMovies: React.FC = () => {
  const [moviesData, setMoivesData] = useState<MovieData>(initialState);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (moviesData.default?.entries) {
      const filteredMovies = [...moviesData.default.entries].filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      );

      setMoivesData((prev) => ({
        ...prev,
        currentMovies: filteredMovies.slice(0, 10),
        filteredMovies: filteredMovies,
        searchValue: event.target.value,
      }));
    }
  };

  const handleChangePage = (pageNumber: number) => {
    setMoivesData((prev) => ({
      ...prev,
      currentMovies: prev.filteredMovies
        ? prev.filteredMovies.slice(
            pageNumber === 1 ? pageNumber - 1 : (pageNumber - 1) * 10,
            pageNumber * 10
          )
        : [],
      currentPage: pageNumber,
    }));
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, [moviesData]);

  useEffect(() => {
    if (moviesData.default === null) {
      const MOVIES_URL =
        "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json";

      fetch(MOVIES_URL)
        .then((res) => res.json())
        .then((data: MovieRes) => {
          const filteredMovies = [...data.entries].filter((item) =>
            item.title
              .toLowerCase()
              .includes(moviesData.searchValue.toLowerCase())
          );
          const currentPageMovies = filteredMovies.slice(
            moviesData.currentPage === 1
              ? moviesData.currentPage - 1
              : (moviesData.currentPage - 1) * 10,
            moviesData.currentPage * 10
          );

          setMoivesData((prev) => ({
            ...prev,
            default: data,
            currentMovies: currentPageMovies,
            filteredMovies: filteredMovies,
          }));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className={styles.moviesWrapper}>
      <SearchBar onChange={debouncedResults} />
      <div className={styles.moviesContainer}>
        <h1 className={styles.heading}>Popular Movies</h1>
        <div>
          {moviesData.filteredMovies === null ||
          moviesData.currentMovies === null ? (
            <h1>Loading...</h1>
          ) : moviesData.currentMovies.length === 0 ||
            moviesData.filteredMovies.length === 0 ? (
            <h1>No Movies Data</h1>
          ) : (
            <>
              <div className={styles.moviesListWrapper}>
                {moviesData.currentMovies.map((movie, index) => (
                  <MovieCard
                    key={index}
                    title={movie.title}
                    description={movie.description}
                    releaseYear={movie.releaseYear}
                    imgUrl={movie.images.posterArt.url}
                  />
                ))}
              </div>
              <Pagination
                totalPages={Math.ceil(moviesData.filteredMovies.length / 10)}
                currentPage={moviesData.currentPage}
                handleChangePage={handleChangePage}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
