import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './common/reducers/index';
import { FormsModule } from '@angular/forms';
import { NewOperation } from './new-operation.component';
import { OperationsList } from './operations-list.component';

@NgModule({
    declarations: [
        AppComponent,
        NewOperation,
        OperationsList
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.provideStore(reducer)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
