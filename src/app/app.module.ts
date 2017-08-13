import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { reducer } from './common/reducers/index';
import { NewOperation } from './new-operation.component';
import { OperationsList } from './operations-list.component';
import { Currencies } from './currencies.component';
import { CurrencyService } from './common/services/currency.service';
import { CurrencyEffects } from './common/effects/currencies';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { CustomCurrencyPipe } from './currency.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NewOperation,
        OperationsList,
        Currencies,

        CustomCurrencyPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        EffectsModule.run(CurrencyEffects),
        StoreModule.provideStore(reducer)
    ],
    providers: [CurrencyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
