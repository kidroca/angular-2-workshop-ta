import {Injectable} from '@angular/core';
import {Movie} from './models/movie';

const movies = require('json-loader!./movies.json').map((data: any) => new Movie(data));

@Injectable()
export class MovieDataService {

    getMovies(): Promise<Movie[]> {

        return Promise.resolve(movies.slice());
    }

    getMovie(id: string): Promise<Movie> {

        return Promise.resolve(movies.filter((m: Movie) => m.imdbID === id).pop());
    }

    query(values: Object): Promise<Movie[]> {

        if (Reflect.ownKeys(values).length === 0) {

            return Promise.reject<Movie[]>(new Error('No query properties are provided'));
        }

        return Promise.resolve(movies.slice());
    }
}
