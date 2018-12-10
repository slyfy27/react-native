import { combineReducers } from 'redux';
import GetWeatherReducer from './item/GetWeatherReducer';

//必须有初始数据
const rootReducer = combineReducers ({
    GetWeatherReducer,
});

export default rootReducer;