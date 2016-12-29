import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/list/movies-list.component';
import { MovieItemComponent } from './movies/single/movie-item.component';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FilterPipe} from './pipes/filer.pipe';
import {RatingComponent} from './movies/rating.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MoviesListComponent,
        MovieItemComponent,
        RatingComponent,
        OrderByPipe,
        FilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
