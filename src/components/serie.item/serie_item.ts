import { Series } from '../../model/series.js';

export class Item {
    constructor(public serie: Series) {
        // this.createTemplate();
    }

    createTemplate() {
        return `<li class="serie">
                                <img
                                    class="serie__poster"
                                    src="${this.serie.poster}"
                                    alt="The Sopranos poster"
                                />
                                <h4 class="serie__title">${this.serie.name}</h4>
                                <p class="serie__info">${this.serie.creator} ${this.serie.year}</p>
                                <ul class="score">
                                    <li class="score__star">
                                    <slot name="numberStars"></slot>     
                                    <i
                                            class="icon--score fas fa-star"
                                            title="1/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="2/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="3/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="4/5"
                                        ></i>
                                    </li>
                                    <li class="score__star">
                                        <i
                                            class="icon--score fas fa-star"
                                            title="5/5"
                                        ></i>
                                    </li>
                                </ul>
                                <button class = "btnDelete">
                                    <i class="fas fa-times-circle icon--delete"></i>
                                </button>
                            </li>`;
    }
}
