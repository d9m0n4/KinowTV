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

declare module FilmBudget {
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

declare module Staff {
  export interface IStaff {
    staffId: number;
    nameRu: string;
    nameEn: string;
    description: string;
    posterUrl: string;
    professionText: string;
    professionKey: string;
  }
}

declare module IPerson {
  export interface Spous {
    personId: number;
    name: string;
    divorced: boolean;
    divorcedReason: string;
    sex: string;
    children: number;
    webUrl: string;
    relation: string;
  }

  export interface Film {
    filmId: number;
    nameRu: string;
    nameEn: string;
    rating: string;
    general: boolean;
    description: string;
    professionKey: string;
  }

  export interface PersonInfo {
    personId: number;
    webUrl: string;
    nameRu: string;
    nameEn: string;
    sex: string;
    posterUrl: string;
    growth: number;
    birthday: string;
    death?: any;
    age: number;
    birthplace: string;
    deathplace?: any;
    spouses: Spous[];
    hasAwards: number;
    profession: string;
    facts: string[];
    films: Film[];
  }
}

export type { FilmBudget, Staff, IPerson };
