export interface PosterArt {
  height: number;
  url: string;
  width: number;
}

export interface Images {
  posterArt: PosterArt;
}

export interface Movie {
  title: string;
  description: string;
  releaseYear: number;
  images: Images;
}

export interface MovieRes {
  entries: Movie[];
  total: number;
}

export interface MovieData {
  default: null | MovieRes;
  currentPage: number;
  currentMovies: null | Movie[];
  filteredMovies: null | Movie[];
  searchValue: string;
}
