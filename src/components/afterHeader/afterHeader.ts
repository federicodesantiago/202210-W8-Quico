import { Component } from '../component/component.js';

export class afterHeader extends Component {
    constructor(selector: string) {
        super();
        this.template = `<section class="series">
                    <h2 class="section-title">Series list</h2>
                    <section class="series-pending">
                        <h3 class="subsection-title">Pending series</h3>
                        <p class="info">You have 4 series pending to watch</p>
                        <!--<p class="info">Congrats! You've watched all your series</p>-->
                        <ul class="series-list">
                            <slot name="seriesUnWatched" class="seriesUnWatched"></slot>
                        </ul>
                    </section>
                    <section class="series-watched">
                        <h3 class="subsection-title">Watched series</h3>
                        <p class="info">You have watched 4 series</p>
                        <!--<p class="info">You already have not watched any serie</p>-->
                        <ul class="series-list series-list--watched">
                            <slot name="seriesWatched" class="seriesWatched"></slot>
                        </ul>
                    </section>
                </section>`;
        this.outRender(selector);
    }
}
