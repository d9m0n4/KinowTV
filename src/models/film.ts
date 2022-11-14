export interface Country {
  country: string;
}

export interface Genre {
  genre: string;
}

export interface IFilm {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: any;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl?: any;
  logoUrl?: any;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics?: any;
  ratingFilmCriticsVoteCount: number;
  ratingAwait?: any;
  ratingAwaitCount: number;
  ratingRfCritics?: any;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength?: any;
  slogan?: any;
  description: string;
  shortDescription?: any;
  editorAnnotation?: any;
  isTicketsAvailable: boolean;
  productionStatus?: any;
  type: string;
  ratingMpaa?: any;
  ratingAgeLimits: string;
  countries: Country[];
  genres: Genre[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: Date;
}

export interface FilteredFilm {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn?: any;
  nameOriginal: string;
  countries: Country[];
  genres: Genre[];
  ratingKinopoisk: number;
  ratingImdb?: number;
  year: number;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}

export interface FilteredFilms {
  total: number;
  totalPages: number;
  items: FilteredFilm[];
}
