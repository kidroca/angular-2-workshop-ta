import { Component, OnInit } from '@angular/core';
import {Movie} from '../../data/models/movie';
import {MovieDataService} from '../../data/movie-data.service';

@Component({
    selector: 'mvdb-movies-list',
    templateUrl: 'movies-list.component.html'
})
export class MoviesListComponent implements OnInit {

    movies: Movie[] = [];
    searchTerm: string = '';
    orders: any[] = [];
    orderBy: string;
    orderDescending = false;

    private lastSearch: string;

    constructor(private movieData: MovieDataService) { }

    toggleOrder(isReverse: string) {

        this.orderDescending = JSON.parse(isReverse);
    }

    searchMovies(): void {

        if (this.lastSearch === this.searchTerm) {
            return;
        }

        this.lastSearch = this.searchTerm;

        this.movieData.searchByTitle(this.searchTerm)
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
        this.initOrders();
    }
}
