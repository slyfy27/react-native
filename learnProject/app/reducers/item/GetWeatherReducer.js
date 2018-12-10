
import * as TYPES from '../../../ActionType';

const initialState = {
    status : 'init',
    isSuccess : false,
    bean : null,
    message : '',
}

export default function getWeather(state = initialState, action) {
    switch (action.type) {
        case TYPES.ACTION_GETWEATHER_INIT:
            return Object.assign({}, state, {
                status : 'init',
                isSuccess : false,
                bean : action.bean,
                message : action.message,
            });
            break;
        case TYPES.ACTION_GETWEATHER_SUCCESS:
            return Object.assign({}, state, {
                status : 'success',
                isSuccess : true,
                bean : action.bean,
                message : action.message,
            });
            break;
        default:
            return state;
            break;
    }
}