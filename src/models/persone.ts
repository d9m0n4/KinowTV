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

export interface PersonFilm {
	filmId: number;
	nameRu: string;
	nameEn: string;
	rating: string;
	general: boolean;
	description: string;
	professionKey: string;
}

export interface IPersonInfo {
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
	films: PersonFilm[];
}
