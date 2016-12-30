import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MoviesListComponent} from './app/movies/list/movies-list.component';
import {MovieDetailComponent} from './app/movies/detail/movie-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        component: MoviesListComponent
    },
    {
        path: 'movies/:id',
        component: MovieDetailComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
