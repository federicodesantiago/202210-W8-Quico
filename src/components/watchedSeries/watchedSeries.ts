import { SeriesType } from '../../model/series.js';

let serieWatched = [];

export function watchedSeries(series: Array<SeriesType>) {
    serieWatched = series.filter((item) => item.watched === true);
    return serieWatched;
}
