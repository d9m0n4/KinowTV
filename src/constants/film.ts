export enum FilmType {
  Film = 'FILM',
  TV_SHOW = 'TV_SHOW',
  TV_SERIES = 'TV_SERIES',
  MINI_SERIAL = 'MINI_SERIAL',
  ALL = 'ALL',
}

export enum FilmOrder {
  YEAR = 'YEAR',
  RATING = 'RATING',
  NUM_VOTE = 'NUM_VOTE',
}

export enum FilmTOP {
  TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS',
  TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS',
  TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS',
}

// const genres: [
//   {
//     id: 1;
//     genre: 'триллер';
//   },
//   {
//     id: 2;
//     genre: 'драма';
//   },
//   {
//     id: 3;
//     genre: 'криминал';
//   },
//   {
//     id: 4;
//     genre: 'мелодрама';
//   },
//   {
//     id: 5;
//     genre: 'детектив';
//   },
//   {
//     id: 6;
//     genre: 'фантастика';
//   },
//   {
//     id: 7;
//     genre: 'приключения';
//   },
//   {
//     id: 8;
//     genre: 'биография';
//   },
//   {
//     id: 9;
//     genre: 'фильм-нуар';
//   },
//   {
//     id: 10;
//     genre: 'вестерн';
//   },
//   {
//     id: 11;
//     genre: 'боевик';
//   },
//   {
//     id: 12;
//     genre: 'фэнтези';
//   },
//   {
//     id: 13;
//     genre: 'комедия';
//   },
//   {
//     id: 14;
//     genre: 'военный';
//   },
//   {
//     id: 15;
//     genre: 'история';
//   },
//   {
//     id: 16;
//     genre: 'музыка';
//   },
//   {
//     id: 17;
//     genre: 'ужасы';
//   },
//   {
//     id: 18;
//     genre: 'мультфильм';
//   },
//   {
//     id: 19;
//     genre: 'семейный';
//   },
//   {
//     id: 20;
//     genre: 'мюзикл';
//   },
//   {
//     id: 21;
//     genre: 'спорт';
//   },
//   {
//     id: 22;
//     genre: 'документальный';
//   },
//   {
//     id: 23;
//     genre: 'короткометражка';
//   },
//   {
//     id: 24;
//     genre: 'аниме';
//   },
//   {
//     id: 25;
//     genre: '';
//   },
//   {
//     id: 26;
//     genre: 'новости';
//   },
//   {
//     id: 27;
//     genre: 'концерт';
//   },
//   {
//     id: 28;
//     genre: 'для взрослых';
//   },
//   {
//     id: 29;
//     genre: 'церемония';
//   },
//   {
//     id: 30;
//     genre: 'реальное ТВ';
//   },
//   {
//     id: 31;
//     genre: 'игра';
//   },
//   {
//     id: 32;
//     genre: 'ток-шоу';
//   },
//   {
//     id: 33;
//     genre: 'детский';
//   },
// ];

export const countries = [
  {
    value: 1,
    name: 'США',
  },
  {
    value: 2,
    name: 'Швейцария',
  },
  {
    value: 3,
    name: 'Франция',
  },
  {
    value: 4,
    name: 'Польша',
  },
  {
    value: 5,
    name: 'Великобритания',
  },
  {
    value: 6,
    name: 'Швеция',
  },
  {
    value: 7,
    name: 'Индия',
  },
  {
    value: 8,
    name: 'Испания',
  },
  {
    value: 9,
    name: 'Германия',
  },
  {
    value: 10,
    name: 'Италия',
  },
  {
    value: 11,
    name: 'Гонконг',
  },

  {
    value: 13,
    name: 'Австралия',
  },
  {
    value: 14,
    name: 'Канада',
  },
  {
    value: 15,
    name: 'Мексика',
  },
  {
    value: 16,
    name: 'Япония',
  },
  {
    value: 17,
    name: 'Дания',
  },
  {
    value: 18,
    name: 'Чехия',
  },
  {
    value: 19,
    name: 'Ирландия',
  },
  {
    value: 20,
    name: 'Люксембург',
  },
  {
    value: 21,
    name: 'Китай',
  },
  {
    value: 22,
    name: 'Норвегия',
  },
  {
    value: 23,
    name: 'Нидерланды',
  },
  {
    value: 24,
    name: 'Аргентина',
  },
  {
    value: 25,
    name: 'Финляндия',
  },
  {
    value: 26,
    name: 'Босния и Герцеговина',
  },
  {
    value: 27,
    name: 'Австрия',
  },
  {
    value: 28,
    name: 'Тайвань',
  },
  {
    value: 29,
    name: 'Новая Зеландия',
  },
  {
    value: 30,
    name: 'Бразилия',
  },
  {
    value: 31,
    name: 'Чехословакия',
  },
  {
    value: 32,
    name: 'Мальта',
  },
  {
    value: 33,
    name: 'СССР',
  },
  {
    value: 34,
    name: 'Россия',
  },
  {
    value: 35,
    name: 'Югославия',
  },
  {
    value: 36,
    name: 'Португалия',
  },
  {
    value: 37,
    name: 'Румыния',
  },
  {
    value: 38,
    name: 'Хорватия',
  },
  {
    value: 39,
    name: 'ЮАР',
  },
  {
    value: 40,
    name: 'Куба',
  },
  {
    value: 41,
    name: 'Колумбия',
  },
  {
    value: 42,
    name: 'Израиль',
  },
  {
    value: 43,
    name: 'Намибия',
  },
  {
    value: 44,
    name: 'Турция',
  },
  {
    value: 45,
    name: 'Бельгия',
  },
  {
    value: 46,
    name: 'Сальвадор',
  },
  {
    value: 47,
    name: 'Исландия',
  },
  {
    value: 48,
    name: 'Венгрия',
  },
  {
    value: 49,
    name: 'Корея Южная',
  },
  {
    value: 50,
    name: 'Лихтенштейн',
  },
  {
    value: 51,
    name: 'Болгария',
  },
  {
    value: 52,
    name: 'Филиппины',
  },
  {
    value: 53,
    name: 'Доминикана',
  },

  {
    value: 55,
    name: 'Марокко',
  },
  {
    value: 56,
    name: 'Таиланд',
  },
  {
    value: 57,
    name: 'Кения',
  },
  {
    value: 58,
    name: 'Пакистан',
  },
  {
    value: 59,
    name: 'Иран',
  },
  {
    value: 60,
    name: 'Панама',
  },
  {
    value: 61,
    name: 'Аруба',
  },
  {
    value: 62,
    name: 'Ямайка',
  },
  {
    value: 63,
    name: 'Греция',
  },
  {
    value: 64,
    name: 'Тунис',
  },
  {
    value: 65,
    name: 'Кыргызстан',
  },
  {
    value: 66,
    name: 'Пуэрто Рико',
  },
  {
    value: 67,
    name: 'Казахстан',
  },
  {
    value: 71,
    name: 'Сингапур',
  },
  {
    value: 72,
    name: 'Словакия',
  },
  {
    value: 73,
    name: 'Афганистан',
  },
  {
    value: 74,
    name: 'Индонезия',
  },
  {
    value: 75,
    name: 'Перу',
  },
  {
    value: 76,
    name: 'Бермуды',
  },
  {
    value: 77,
    name: 'Монако',
  },
  {
    value: 78,
    name: 'Зимбабве',
  },
  {
    value: 79,
    name: 'Вьетнам',
  },
  {
    value: 81,
    name: 'Саудовская Аравия',
  },
  {
    value: 82,
    name: 'Танзания',
  },
  {
    value: 83,
    name: 'Ливия',
  },
  {
    value: 84,
    name: 'Ливан',
  },
  {
    value: 85,
    name: 'Кувейт',
  },
  {
    value: 86,
    name: 'Египет',
  },
  {
    value: 87,
    name: 'Литва',
  },
  {
    value: 88,
    name: 'Венесуэла',
  },
  {
    value: 89,
    name: 'Словения',
  },
  {
    value: 90,
    name: 'Чили',
  },
  {
    value: 91,
    name: 'Багамы',
  },
  {
    value: 92,
    name: 'Эквадор',
  },
  {
    value: 93,
    name: 'Коста-Рика',
  },
  {
    value: 94,
    name: 'Кипр',
  },
  {
    value: 95,
    name: 'Уругвай',
  },
  {
    value: 96,
    name: 'Ирак',
  },
  {
    value: 97,
    name: 'Мартиника',
  },
  {
    value: 98,
    name: 'Эстония',
  },
  {
    value: 99,
    name: 'ОАЭ',
  },
  {
    value: 100,
    name: 'Бангладеш',
  },
  {
    value: 101,
    name: 'Македония',
  },
  {
    value: 102,
    name: 'Гвинея',
  },
  {
    value: 103,
    name: 'Иордания',
  },
  {
    value: 104,
    name: 'Латвия',
  },
  {
    value: 105,
    name: 'Армения',
  },
  {
    value: 106,
    name: 'Украина',
  },
  {
    value: 107,
    name: 'Сирия',
  },
  {
    value: 108,
    name: 'Шри-Ланка',
  },
  {
    value: 109,
    name: 'Нигерия',
  },
  {
    value: 110,
    name: 'Берег Слоновой кости',
  },
  {
    value: 111,
    name: 'Грузия',
  },
  {
    value: 112,
    name: 'Сенегал',
  },
  {
    value: 113,
    name: 'Монголия',
  },
  {
    value: 114,
    name: 'Габон',
  },
  {
    value: 115,
    name: 'Замбия',
  },
  {
    value: 116,
    name: 'Албания',
  },
  {
    value: 117,
    name: 'Камерун',
  },
  {
    value: 118,
    name: 'Буркина-Фасо',
  },
  {
    value: 119,
    name: 'Узбекистан',
  },
  {
    value: 120,
    name: 'Малайзия',
  },
  {
    value: 121,
    name: 'Сербия',
  },
  {
    value: 122,
    name: 'Гана',
  },
  {
    value: 123,
    name: 'Таджикистан',
  },
  {
    value: 124,
    name: 'Гаити',
  },
  {
    value: 125,
    name: 'Конго (ДРК)',
  },
  {
    value: 126,
    name: 'Гватемала',
  },
  {
    value: 127,
    name: 'Российская империя',
  },
  {
    value: 128,
    name: 'Беларусь',
  },
  {
    value: 129,
    name: 'Молдова',
  },
  {
    value: 130,
    name: 'Азербайджан',
  },
  {
    value: 131,
    name: 'Палестина',
  },
  {
    value: 132,
    name: 'Оккупированная Палестинская территория',
  },
  {
    value: 133,
    name: 'Корея Северная',
  },
  {
    value: 134,
    name: 'Никарагуа',
  },
  {
    value: 135,
    name: 'Камбоджа',
  },
  {
    value: 136,
    name: 'Ангола',
  },
  {
    value: 137,
    name: 'Сербия и Черногория',
  },
  {
    value: 138,
    name: 'Непал',
  },
  {
    value: 139,
    name: 'Бенин',
  },
  {
    value: 140,
    name: 'Гваделупа',
  },
  {
    value: 141,
    name: 'Гренландия',
  },
  {
    value: 142,
    name: 'Гвинея-Бисау',
  },
  {
    value: 143,
    name: 'Макао',
  },
  {
    value: 144,
    name: 'Парагвай',
  },
  {
    value: 145,
    name: 'Мавритания',
  },
  {
    value: 146,
    name: 'Руанда',
  },
  {
    value: 147,
    name: 'Фарерские острова',
  },
  {
    value: 148,
    name: 'Кот-д’Ивуар',
  },
  {
    value: 149,
    name: 'Гибралтар',
  },
  {
    value: 150,
    name: 'Ботсвана',
  },
  {
    value: 151,
    name: 'Боливия',
  },
  {
    value: 152,
    name: 'Мадагаскар',
  },
  {
    value: 153,
    name: 'Кабо-Верде',
  },
  {
    value: 154,
    name: 'Чад',
  },
  {
    value: 155,
    name: 'Мали',
  },
  {
    value: 156,
    name: 'Фиджи',
  },
  {
    value: 157,
    name: 'Бутан',
  },
  {
    value: 158,
    name: 'Барбадос',
  },
  {
    value: 159,
    name: 'Тринидад и Тобаго',
  },
  {
    value: 160,
    name: 'Мозамбик',
  },
  {
    value: 161,
    name: 'Заир',
  },
  {
    value: 162,
    name: 'Андорра',
  },
  {
    value: 163,
    name: 'Туркменистан',
  },
  {
    value: 164,
    name: 'Гайана',
  },
  {
    value: 165,
    name: 'Корея',
  },
  {
    value: 166,
    name: 'Нигер',
  },
  {
    value: 167,
    name: 'Конго',
  },
  {
    value: 168,
    name: 'Того',
  },
  {
    value: 169,
    name: 'Ватикан',
  },
  {
    value: 170,
    name: 'Черногория',
  },
  {
    value: 171,
    name: 'Бурунди',
  },
  {
    value: 172,
    name: 'Папуа - Новая Гвинея',
  },
  {
    value: 173,
    name: 'Бахрейн',
  },
  {
    value: 174,
    name: 'Гондурас',
  },
  {
    value: 175,
    name: 'Судан',
  },
  {
    value: 176,
    name: 'Эфиопия',
  },
  {
    value: 177,
    name: 'Йемен',
  },
  {
    value: 178,
    name: 'Вьетнам Северный',
  },
  {
    value: 179,
    name: 'Суринам',
  },
  {
    value: 180,
    name: 'Маврикий',
  },
  {
    value: 181,
    name: 'Белиз',
  },
  {
    value: 182,
    name: 'Либерия',
  },
  {
    value: 183,
    name: 'Лесото',
  },
  {
    value: 184,
    name: 'Уганда',
  },
  {
    value: 185,
    name: 'Каймановы острова',
  },
  {
    value: 186,
    name: 'Антигуа и Барбуда',
  },
  {
    value: 187,
    name: 'Западная Сахара',
  },
  {
    value: 188,
    name: 'Сан-Марино',
  },
  {
    value: 189,
    name: 'Гуам',
  },
  {
    value: 190,
    name: 'Косово',
  },
  {
    value: 191,
    name: 'Лаос',
  },
  {
    value: 192,
    name: 'Катар',
  },
  {
    value: 193,
    name: 'Оман',
  },
  {
    value: 194,
    name: 'Американские Виргинские острова',
  },
  {
    value: 195,
    name: 'Сиам',
  },
  {
    value: 196,
    name: 'Сьерра-Леоне',
  },
  {
    value: 197,
    name: 'Эритрея',
  },
  {
    value: 198,
    name: 'Сомали',
  },
  {
    value: 199,
    name: 'Доминика',
  },
  {
    value: 200,
    name: 'Бирма',
  },
  {
    value: 201,
    name: 'Реюньон',
  },
  {
    value: 202,
    name: 'Федеративные Штаты Микронезии',
  },
  {
    value: 203,
    name: 'Самоа',
  },
  {
    value: 204,
    name: 'Американское Самоа',
  },
  {
    value: 205,
    name: 'Свазиленд',
  },
  {
    value: 206,
    name: 'Французская Полинезия',
  },
  {
    value: 207,
    name: 'Мьянма',
  },
  {
    value: 208,
    name: 'Новая Каледония',
  },
  {
    value: 209,
    name: 'Французская Гвиана',
  },
  {
    value: 210,
    name: 'Сент-Винсент и Гренадины',
  },
  {
    value: 211,
    name: 'Малави',
  },
  {
    value: 212,
    name: 'Экваториальная Гвинея',
  },
  {
    value: 213,
    name: 'Коморы',
  },
  {
    value: 214,
    name: 'Кирибати',
  },
  {
    value: 215,
    name: 'Тувалу',
  },
  {
    value: 216,
    name: 'Тимор-Лесте',
  },
  {
    value: 217,
    name: 'ЦАР',
  },
  {
    value: 218,
    name: 'Тонга',
  },
  {
    value: 219,
    name: 'Гренада',
  },
  {
    value: 220,
    name: 'Гамбия',
  },
  {
    value: 221,
    name: 'Антарктида',
  },
  {
    value: 222,
    name: 'Острова Кука',
  },
  {
    value: 223,
    name: 'Остров Мэн',
  },

  {
    value: 229,
    name: 'Палау',
  },
  {
    value: 230,
    name: 'Сент-Люсия',
  },
  {
    value: 231,
    name: 'Вануату',
  },
  {
    value: 232,
    name: 'Мальдивы',
  },
  {
    value: 233,
    name: 'Босния',
  },
  {
    value: 234,
    name: 'Уоллис и Футуна',
  },

  {
    value: 236,
    name: 'Киргизия',
  },
  {
    value: 239,
    name: 'Джибути',
  },
];

export const years = [
  {
    value: '1990',
    name: '1990',
  },
  {
    value: '2000',
    name: '2000',
  },
  {
    value: '2001',
    name: '2001',
  },
  {
    value: '2002',
    name: '2002',
  },
  {
    value: '2003',
    name: '2003',
  },
  {
    value: '2004',
    name: '2004',
  },
  {
    value: '2005',
    name: '2005',
  },
  {
    value: '2006',
    name: '2006',
  },
  {
    value: '2007',
    name: '2007',
  },
];

export const ratings = [
  {
    value: 5,
    name: '5',
  },
  {
    value: 6,
    name: '6',
  },
  {
    value: 7,
    name: '7',
  },
  {
    value: 8,
    name: '8',
  },
  {
    value: 9,
    name: '9',
  }
]

export const order = [{
  value: FilmOrder.YEAR,
  name: 'по году'
},
  {
    value: FilmOrder.RATING,
    name: 'по рейтингу'
  },
  {
    value: FilmOrder.NUM_VOTE,
    name: 'по...'
  }]

export const FilmGenres = {
  thriller: 1,
  drama: 2,
  cartoon: 18,
};
