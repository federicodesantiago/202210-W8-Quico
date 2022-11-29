import { afterHeader } from './components/afterHeader/afterHeader.js';
import { Header } from './components/header/header.js';
import { itemList } from './components/itemList/itemList.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        new Header('.header');
        new afterHeader('.seriesList');
        new itemList('.seriesUnWatched');
        new itemList('.seriesWatched');
    });
})();
