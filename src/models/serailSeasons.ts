export interface Episode {
  seasonNumber: number;
  episodeNumber: number;
  nameRu: string;
  nameEn: string;
  synopsis?: any;
  releaseDate: string;
}

export interface Item {
  number: number;
  episodes: Episode[];
}

export interface ISeasons {
  total: number;
  items: Item[];
}
