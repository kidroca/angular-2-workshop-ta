import {Input, Component} from '@angular/core';
import {Movie} from '../../data/models/movie';

@Component({
    selector: '[mvdb-movie-item]',
    templateUrl: 'movie-item.component.html'
})
export class MovieItemComponent {

    @Input('mvdb-movie-item') movie: Movie;
}
