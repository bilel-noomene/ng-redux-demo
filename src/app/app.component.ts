import { Component } from '@angular/core';
import { Operation } from './common/models/operation.model';
import { State, Store } from '@ngrx/store';
import * as operations from './common/actions/operations';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './common/reducers';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public id = 0;
    public operations: Observable<Operation[]>;

    constructor(private _store: Store<fromRoot.State>) {
        this.operations = _store.let(fromRoot.getEntities)
    }

    addOperation(operation) {
        this._store.dispatch(new operations.AddOperationAction({
                id: ++this.id, // simulating ID increments
                reason: operation.reason,
                amount: operation.amount
            })
        );
    }


    incrementOperation(operation) {
        this._store.dispatch(new operations.IncrementOperationAction(operation))
    }

    decrementOperation(operation) {
        this._store.dispatch(new operations.DecrementOperationAction(operation))
    }


    deleteOperation(operation) {
        this._store.dispatch(new operations.RemoveOperationAction(operation))
    }


}
