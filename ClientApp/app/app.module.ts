import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { DefinitionsComponent } from './components/definitions/definitions.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        FetchDataComponent,
        HomeComponent,
        DefinitionsComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'definitions', component: DefinitionsComponent },
            { path: 'recalculation', component: HomeComponent },
            { path: 'validators', component: FetchDataComponent },
            { path: 'seeds', component: FetchDataComponent },
            { path: '**', component: HomeComponent }
        ])
    ]
})
export class AppModule {
}
