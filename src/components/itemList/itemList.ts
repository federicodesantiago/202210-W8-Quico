import { Series } from '../../model/series.js';
import { Item } from '../serie.item/serie_item.js';
import { series } from '../../mocks/series.js';
import { Component } from '../component/component.js';

export class itemList extends Component {
    constructor(selector: string) {
        super();
        this.template = this.renderAllSeries();
        this.outRender(selector);
    }
    renderAllSeries() {
        series.forEach((serie: Series) => {
            this.template += new Item(serie);
        });
        return this.template;
    }
}
