
import * as TYPES from '../../ActionType';

export function actionGetWeather(list) {
    return (dispatch) => {
        dispatch(init(list));

        dispatch(success(list));
    }
}

function init(list) {
    return {
        type : TYPES.ACTION_GETWEATHER_INIT,
        message : '开始获取',
        bean : list,
    }
}

function success(list) {
    return {
        type : TYPES.ACTION_GETWEATHER_SUCCESS,
        message : '获取成功',
        bean : list,
    }
}