import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Rx';
import * as currencyActions from '../actions/currencies';

import { CurrencyService } from '../services/currency.service';
import { LoadRatesCompleteAction } from '../actions/currencies';


@Injectable()
export class CurrencyEffects {

    /*
     The effects for different states are singletons that 'intercept' dispatched actions that are being sent to the reducer.
    */
    @Effect() loadCategories$ = this._actions.ofType(currencyActions.ActionTypes.LOAD_CURRENCY_RATES)
        .switchMap(() => this._currencyService.loadCurrencies()
            .map((rates) => new LoadRatesCompleteAction(rates))
            .catch(() => Observable.of(new LoadRatesCompleteAction('')))
        );

    constructor(private _actions: Actions,
                private _currencyService: CurrencyService) {
    }
}
