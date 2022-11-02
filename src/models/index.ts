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

declare module IBudget {
  export interface Item {
    type: string;
    amount: number;
    currencyCode: string;
    name: string;
    symbol: string;
  }

  export interface BudgetItems {
    total: number;
    items: Item[];
  }
}

export default IBudget;
