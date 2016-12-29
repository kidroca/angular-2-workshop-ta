import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        HttpModule,
        NgbModule.forRoot()
    ],
    declarations: [],
    providers: [],
    exports: [
        HttpModule,
        NgbModule,
    ],
})
export class CoreModule { }
