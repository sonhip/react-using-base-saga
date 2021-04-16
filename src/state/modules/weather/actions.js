import { createAction } from 'redux-actions';
import axios from 'axios';

import { put, call, takeLatest } from 'redux-saga/effects';
import types from './types';
// import handleError from '~/utils/ErrorHandler';

//= ============== ACTIONS ===============//
const getCurrentWeather = createAction(types.GET_CURRENT_WEATHER);
const startGetCurrentWeather = createAction(types.START_GET_CURRENT_WEATHER);
const stopGetCurrentWeather = createAction(types.STOP_GET_CURRENT_WEATHER);
const getCurrentWeatherFailed = createAction(types.GET_CURRENT_WEATHER_FAILED);
const getCurrentWeatherSuccess = createAction(
    types.GET_CURRENT_WEATHER_SUCCESS,
);

export const actions = {
    getCurrentWeather,
};

export function* sagas() {
    yield takeLatest(types.GET_CURRENT_WEATHER, fetchData);
}

function* fetchData({ payload }) {
    try {
        yield put(startGetCurrentWeather(true));
        const exampleApi = {
            fetch: async (nameCity) => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
                const respond = await axios.get(url);
                const data = (await respond.status) === 200 ? respond.data : {};
                return data;
            },
        };
        const data = yield call(exampleApi.fetch, payload);
        yield put(getCurrentWeatherSuccess(data));
        yield put(stopGetCurrentWeather(false));
    } catch (error) {
        // handleError(error);
        yield put(getCurrentWeatherFailed());
        yield put(stopGetCurrentWeather(false));
    }
}
