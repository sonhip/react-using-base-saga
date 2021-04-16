import { createSelector } from 'reselect';

import { isEmptyObject } from './helper';

const weatherSelector = (state) => state.get('weatherReducer').toJS();
export const loadingSelector = createSelector(
    weatherSelector,
    (item) => item.loading,
);

export const errorSelector = createSelector(
    weatherSelector,
    (item) => item?.error,
);

export const dataCurrentWeatherSelector = createSelector(
    weatherSelector,
    (item) => {
        if (!isEmptyObject(item.dataWeather)) {
            return {
                temp: item.dataWeather.main.temp,
                des: item.dataWeather.weather[0].description,
                icon: item.dataWeather.weather[0].icon,
                temp_min: item.dataWeather.main.temp_min,
                temp_max: item.dataWeather.main.temp_max,
                speed: item.dataWeather.wind.speed,
                humidity: item.dataWeather.main.humidity,
                sunrise: item.dataWeather.sys.sunrise,
                sunset: item.dataWeather.sys.sunset,
                name: item.dataWeather.name,
                timezone: item.dataWeather.timezone,
                country: item.dataWeather.sys.country,
                dt: item.dataWeather.dt,
            };
        }
        return {};
    },
);
