import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {SharedModule} from './shared.module';
import {CoreModule} from './core/core.module';
import {MoviesListComponent} from './movies/list/movies-list.component';
import {MovieDetailComponent} from './movies/detail/movie-detail.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([{
            path: '',
            redirectTo: '/movies',
            pathMatch: 'full'
        }, {
            path: 'movies',
            component: MoviesListComponent
        }, {
            path: 'movies/:id',
            component: MovieDetailComponent
        }]),
        CoreModule,
        SharedModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
