import { combineReducers } from 'redux';
import WeatherReducer from './ReducerWeather';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weather: WeatherReducer
});

export default rootReducer;
