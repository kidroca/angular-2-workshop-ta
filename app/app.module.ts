import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from './shared.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
