import {Input, Component} from '@angular/core';
import {Movie} from '../../data/models/movie';

@Component({
    selector: '[mvdb-movie-item]',
    templateUrl: 'movie-item.component.html',
    styles: ['td {vertical-align: middle !important;}']
})
export class MovieItemComponent {

    @Input('mvdb-movie-item') movie: Movie;
}
