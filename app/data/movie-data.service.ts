import {Http, URLSearchParams} from '@angular/http';

import {Injectable} from '@angular/core';
import {Movie} from './models/movie';
import {MovieType} from './models/movie-type.enum';

const baseApiUrl = 'http://www.omdbapi.com/';

@Injectable()
export class MovieDataService {

    constructor(private http: Http) {}

    getMovie(id: string): Promise<Movie> {

        if (!id) {
            return Promise.reject<Movie>(new Error('The id is required'));
        }

        let params = new URLSearchParams();
        params.set('i', id);
        params.set('plot', 'full');

        return this.http.get(baseApiUrl, {search: params})
            .toPromise()
            .then(response => response.json())
            .then(item => new Movie(item));
    }

    searchByTitle(title: string, type: MovieType = MovieType.movie): Promise<Movie[]> {

        if (!title || title.length < 3) {
            return Promise.reject<Movie[]>(new Error('The title is too short'));
        }

        let params = new URLSearchParams();
        params.set('s', title);
        params.set('type', MovieType[type]);

        return this.http.get(baseApiUrl, {search: params})
            .toPromise()
            .then(response => response.json().Search)
            .then(data => data.map((item: any) => new Movie(item)));
    }
}
