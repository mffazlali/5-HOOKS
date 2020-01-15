import * as counterActionType from './Counter.actionType';

export const increment=()=>{
    return {
        type: counterActionType.Inc
    };
};

export const decrement=()=>{
    return {
        type: counterActionType.Dec
    };
};

export const add=(number)=>{
    return {
        type: counterActionType.Add,
        value: number
    };
};

export const subtract=(number)=>{
    return {
        type: counterActionType.Sub,
        value: number
    };
};