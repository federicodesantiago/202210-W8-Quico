import { afterHeader } from './components/afterHeader/afterHeader.js';
import { Header } from './components/header/header.js';
import { itemList } from './components/itemList/itemList.js';
import { series } from './mocks/series.js';
import { watchedSeries } from './components/watchedSeries/watchedSeries.js';
import { UnWatchedSeries } from './components/unWatchedSeries/unWatchedSeries.js';
import { Series } from './model/series.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Header('.header');
        new afterHeader('.seriesList');
        new itemList('.seriesUnWatched', UnWatchedSeries(series));
        new itemList('.seriesWatched', watchedSeries(series));

        //No funciona todavía el addEventListener:
        // const deleteButton = document.querySelector('.icon--delete');
        // if (deleteButton != null) {
        //     deleteButton.addEventListener('click', () => {
        //         series. = true;
        //         console.log('clicked');
        //     });
        // }

        const starsButton = document.querySelector('.icon--delete');
        if (starsButton != null) {
            starsButton.addEventListener('click', () => {
                series. = true;
                console.log('clicked');
            });
        }
    };);
})();
console.log('number: ', series);
console.log('number0: ', series[0]);
