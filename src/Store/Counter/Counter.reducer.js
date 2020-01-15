import * as counterActionType from './Counter.actionType';
import { counterState } from './Counter.state';
import { updateObject } from '../Utility';

const CounterReducer = (state = counterState, action) => {
    switch (action.type) {
        case counterActionType.Inc:
            return updateObject(state, { counter: state.counter + 1 });
        case counterActionType.Dec:
            return updateObject(state, { counter: state.counter - 1 });
        case counterActionType.Add:
            return updateObject(state, { counter: state.counter + action.value });
        case counterActionType.Sub:
            return updateObject(state, { counter: state.counter - action.value });
    }

    return state;
}

export default CounterReducer;