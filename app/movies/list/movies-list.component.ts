import { Component, OnInit } from '@angular/core';
import {Movie} from '../../data/models/movie';
import {MovieDataService} from '../../data/movie-data.service';

@Component({
    selector: 'mvdb-movies-list',
    templateUrl: 'movies-list.component.html',
    styleUrls: [
        'movies-list.component.less'
    ],
    providers: [MovieDataService]
})
export class MoviesListComponent implements OnInit {

    movies: Movie[] = [];
    pageTitle: string = 'Movies List';

    constructor(private movieData: MovieDataService) { }

    private initMovies(): void {
        this.movieData
            .getMovies()
            .then(movies => this.movies = movies);
    }

    ngOnInit(): void {
        this.initMovies();
    }
}
