import { Series, SeriesType } from '../../model/series.js';
import { Item } from '../serie.item/serie_item.js';
import { Component } from '../component/component.js';

export class itemList extends Component {
    constructor(selector: string, public series: Array<SeriesType>) {
        super();
        this.template = ' ';
        this.renderAllSeries();
        this.outRender(selector);
    }
    renderAllSeries() {
        this.series.forEach((serie: Series) => {
            this.template += new Item(serie).createTemplate();
        });
        return this.template;
    }
}
