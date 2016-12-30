import {AudienceRating} from './audience-rating.enum';
import {MovieCast} from './movie-cast';
import {Assignable} from './asignable';
import {MovieType} from './movie-type.enum';

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
    type: MovieType;
    top250: number;

    constructor(values: any = {}) {
        super();

        let castData = {
            director: values.Director,
            writer: values.Writer,
            actors: values.Actors
        };

        this.cast = new MovieCast(castData);

        Reflect.deleteProperty(values, 'Director');
        Reflect.deleteProperty(values, 'Writer');
        Reflect.deleteProperty(values, 'Actors');

        this.assignFields(values);
    }
}
