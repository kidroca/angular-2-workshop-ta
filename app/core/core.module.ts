import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MovieDataService} from '../data/movie-data.service';

@NgModule({
    imports: [
        HttpModule,
        NgbModule.forRoot()
    ],
    declarations: [],
    providers: [MovieDataService],
    exports: [
        HttpModule,
        NgbModule,
    ],
})
export class CoreModule { }
