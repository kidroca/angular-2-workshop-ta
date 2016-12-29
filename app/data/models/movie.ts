import {AudienceRating} from './audience-rating.enum';
import {MovieCast} from './movie-cast';
import {Assignable} from './asignable';

export class Movie extends Assignable {

    title: string;
    year: number;
    rated: AudienceRating;
    /** Date format DD-MMM-YYYY */
    released: string;
    /** In minutes */
    runtime: number;
    genre: string[] = [];
    cast: MovieCast;
    plot: string;
    language: string;
    country: string;
    awards: string;
    poster: string;
    metascore: number;
    imdbRating: number;
    imdbVotes: number;
    imdbID: string;
    type: string;
    top250: number;

    constructor(values: Object = {}) {
        super();

        this.assignFields(values);
    }
}
