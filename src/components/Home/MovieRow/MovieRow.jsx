import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/index";

// CSS
import "./MovieRow.css";

export default function MovieRow({ title, fetchUrl, isLarge }) {
  const [movies, setmovies] = useState([]);
  const baseUrl = "http://image.tmdb.org/t/p/w185";
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const {
        data: { results },
      } = await axios.get(fetchUrl);
      setmovies(results);
      return results;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    navigate(
      `/${movie?.media_type ? movie?.media_type : "show"}/${movie?.id}`,
      { state: movie }
    );
  };

  return (
    <div className="movierow">
      <h1>{title}</h1>
      <div className="movierow__posters">
        {movies.length ? (
          movies.map((movie) => {
            const imagePath = isLarge
              ? movie?.poster_path
              : movie?.backdrop_path;
            if (imagePath) {
              return (
                <img
                  className={`movierow__poster ${
                    isLarge ? "movierow__posterLarge" : ""
                  }`}
                  key={movie?.id}
                  src={`${baseUrl}${imagePath}`}
                  alt={movie?.title || movie?.name || movie?.original_name}
                  onClick={() => handleClick(movie)}
                />
              );
            } else return "";
          })
        ) : (
          <h2 style={{ textAlign: "center", width: "100%" }}>Stay tuned...</h2>
        )}
      </div>
    </div>
  );
}
