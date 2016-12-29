import {Component, OnInit, Input} from '@angular/core';
import {Movie} from '../../data/models/movie';

@Component({
    selector: 'mvdb-movie-detail',
    templateUrl: 'movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

    @Input() movie: Movie;

    constructor() { }

    ngOnInit() { }
}
