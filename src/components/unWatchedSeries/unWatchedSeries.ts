import { SeriesType } from '../../model/series.js';

let serieUnWatched = [];

export function UnWatchedSeries(series: Array<SeriesType>) {
    serieUnWatched = series.filter((item) => item.watched === false);
    return serieUnWatched;
}
