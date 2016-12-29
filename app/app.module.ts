import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2BootstrapModule} from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import {MoviesListComponent} from './movies/list/movies-list.component';
import {MovieItemComponent} from './movies/single/movie-item.component';

@NgModule({
    imports: [BrowserModule, FormsModule, Ng2BootstrapModule, HttpModule],
    declarations: [AppComponent, MoviesListComponent, MovieItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
