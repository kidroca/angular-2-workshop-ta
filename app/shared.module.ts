import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

import {MovieItemComponent} from './movies/single/movie-item.component';
import {MoviesListComponent} from './movies/list/movies-list.component';
import {RatingComponent} from './movies/rating/rating.component';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FilterPipe} from './pipes/filer.pipe';
import {JoinPipe} from './pipes/join.pipe';
import {MovieDetailComponent} from './movies/detail/movie-detail.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        NgbTooltipModule
    ],
    declarations: [
        MoviesListComponent,
        MovieItemComponent,
        RatingComponent,
        MovieDetailComponent,
        JoinPipe,
        OrderByPipe,
        FilterPipe
    ],
    providers: [],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        MoviesListComponent,
        MovieItemComponent,
        RatingComponent,
        OrderByPipe,
        FilterPipe
    ],
})
export class SharedModule { }
