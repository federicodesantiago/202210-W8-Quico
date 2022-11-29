import { SeriesType } from '../model/series.js';

export const series: Array<SeriesType> = [
    {
        id: 1,
        name: 'The Sopranos',
        creator: 'David Chase',
        year: 1999,
        poster: 'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
        score: 5,
        enemies: 5,
        watched: false,
    },
    {
        id: 2,
        name: 'Game of Thrones',
        creator: 'David Benioff D. B. Weiss',
        year: 2011,
        poster: 'https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==',
        score: 0,
        enemies: 164,
        watched: false,
    },
    {
        id: 3,
        name: 'Mad Men',
        creator: 'Matthew Weiner',
        year: 2007,
        poster: 'https://pics.filmaffinity.com/Mad_Men_Serie_de_TV-351490728-large.jpg',
        score: 5,
        enemies: 116,
        watched: true,
    },
    {
        id: 4,
        name: '6 feet under',
        creator: 'Alan Ball',
        year: 2001,
        poster: 'https://www.cine.com/media/series/2711.jpg',
        score: 5,
        enemies: 53,
        watched: false,
    },
    {
        id: 5,
        name: 'Atypical',
        creator: 'Robia Rashid',
        year: 2017,
        poster: 'https://pics.filmaffinity.com/atypical-405052091-large.jpg',
        score: 0,
        enemies: 0,
        watched: true,
    },
];

export const InitializeSeries = () => series;
