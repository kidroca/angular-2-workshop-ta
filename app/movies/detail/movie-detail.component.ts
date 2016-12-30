import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Params} from '@angular/router';

import {MovieDataService} from '../../data/movie-data.service';
import {Movie} from '../../data/models/movie';

@Component({
    selector: 'mvdb-movie-detail',
    templateUrl: 'movie-detail.component.html',
    styleUrls: ['movie-detail.component.less']
})
export class MovieDetailComponent implements OnInit {

    movie: Movie;

    constructor(
        private movieService: MovieDataService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    goBack() {
        this.location.back();
    }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.movieService.getMovie(params['id']))
            .subscribe(movie => this.movie = movie);
    }
}
