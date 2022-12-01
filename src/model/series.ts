export type SeriesType = {
    id: string;
    name: string;
    creator: string;
    year: number;
    poster: string;
    watched: boolean;
    score: number;
    enemies: number;
};

export class Series implements SeriesType {
    static generateId() {
        const aNumbers = new Uint32Array(1);
        crypto.getRandomValues(aNumbers);
        return ('000000' + aNumbers[0]).slice(-6);
    }
    id: string;
    constructor(
        public name: string,
        public creator: string,
        public year: number,
        public poster: string,
        public score: number,
        public enemies: number,
        public watched = false
    ) {
        this.id = Series.generateId();
    }
}
