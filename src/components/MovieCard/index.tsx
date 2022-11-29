import React from "react";

import { Movie } from "../../typings/movies";

import styles from "./MovieCard.module.scss";

interface MovieCardProps extends Omit<Movie, "images"> {
  imgUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  description,
  releaseYear,
  imgUrl,
}) => {
  return (
    <div className={styles.moviCardContainer}>
      <img src={imgUrl} alt={title} width="100%" />
      <h2 className={styles.movieTitle}>{title}</h2>
      <div className={styles.movieDescription}>
        <h2>{title}</h2>
        <span>{releaseYear}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
