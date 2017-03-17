import axios from 'axios';

// const API_KEY = '8acdc9405f52ceb780e150fd180a886e';
// const URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  // const url = `${URL}&q=${city},us`;
  // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  const url = `https://samples.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&appid=b1b15e88fa797225412429c1c50c122a1`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
