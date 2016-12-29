import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import {MoviesListComponent} from './movies/movies-list.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, MoviesListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
