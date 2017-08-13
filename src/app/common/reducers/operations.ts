import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import * as operations from '../actions/operations';
import { Operation } from '../models/operation.model';
import { Observable } from 'rxjs/Observable';


/*
 From a simple array ( [] ),
 the state becomes a object where the array is contained
 withing the entities property
*/
export interface State {
    entities: Array<Operation>
}

const initialState: State = {entities: []};

/*
 Instead of using a constant of type ActionReducer, the
 function is directly exported
*/
export function reducer(state = initialState, action: operations.Actions): State {
    switch (action.type) {
        case operations.ActionTypes.ADD_OPERATION: {
            const operation: Operation = action.payload;
            /*
            Because the state is now an object instead of an array,
            the return statements of the reducer have to be adapted.
            */
            return {
                entities: [...state.entities, operation]
            };

        }

        case operations.ActionTypes.INCREMENT_OPERATION: {
            const operation = ++action.payload.amount;
            return Object.assign({}, state, {
                entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, operation) : item)
            });
        }

        case operations.ActionTypes.DECREMENT_OPERATION: {
            const operation = --action.payload.amount;
            return Object.assign({}, state, {
                entities: state.entities.map(item => item.id === action.payload.id ? Object.assign({}, item, operation) : item)
            });
        }

        case operations.ActionTypes.REMOVE_OPERATION: {

            return Object.assign({}, state, {
                entities: state.entities.filter(operation => operation.id !== action.payload.id)
            })

        }
        default:
            return state;
    }

}

/*
 Get the entities of the operations state object. This function will be
 imported into the file for the Meta Reducer, where it will
 be composed together with a function that gets the state of
 the  operations state object out of the application state.
*/

export function getEntities(state$: Observable<State>) {
    return state$.select(s => s.entities);
}


