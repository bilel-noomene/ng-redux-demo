import { Component } from '@angular/core';
import { Operation } from './common/operation.model';
import { State, Store } from '@ngrx/store';
import { ADD_OPERATION, DECREMENT_OPERATION, INCREMENT_OPERATION, REMOVE_OPERATION, } from './common/operations';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    public id = 0;
    public operations: Observable<Array<Operation>>;

    // initialize a new operation class instance
    public operation: Operation = new Operation();

    constructor(private _store: Store<State<Array<Operation>>>) {
        this.operations = _store.select('operations');
    }

    addOperation(operation) {
        this._store.dispatch({type: ADD_OPERATION , payload: {
            id: ++ this.id, // simulating ID increments
            reason: operation.reason,
            amount: operation.amount
        }});
    }

    // Adding REMOVE_OPERATIOn , INCREMENT_OPERATION , DECREMENT_OPERATION
    incrementOperation(operation) {
        this._store.dispatch({type: INCREMENT_OPERATION, payload: operation})
    }

    decrementOperation(operation) {
        this._store.dispatch({type: DECREMENT_OPERATION, payload: operation})
    }

    deleteOperation(operation) {
        this._store.dispatch({type: REMOVE_OPERATION, payload: operation})
    }


}
