import { Component, OnInit } from '@angular/core';
import {Movie} from '../../data/models/movie';
import {MovieDataService} from '../../data/movie-data.service';

@Component({
    selector: 'mvdb-movies-list',
    templateUrl: 'movies-list.component.html',
    providers: [MovieDataService]
})
export class MoviesListComponent implements OnInit {

    movies: Movie[] = [];
    searchTerm: string = '';
    orders: any[] = [];
    orderBy: string;
    orderDescending = false;

    constructor(private movieData: MovieDataService) { }

    toggleOrder(isReverse: string) {

        this.orderDescending = JSON.parse(isReverse);
    }

    private initMovies(): void {
        this.movieData
            .getMovies()
            .then(movies => this.movies = movies);
    }

    private initOrders(): void {
        this.orders = [
            {key: 'title', name: 'Title'},
            {key: 'year', name: 'Year'},
            {key: 'imdbRating', name: 'Imdb Rating'}
        ];

        this.orderBy = this.orders[0].key;
    }

    ngOnInit(): void {
        this.initMovies();
        this.initOrders();
    }
}
