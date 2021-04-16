import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';
// import enums from '~/utils/enums';

//= ============== SELECTOR ===============//
const dataWeather = (state) => state.getIn(['weatherReducer', 'dataWeather']);
const loading = (state) => state.getIn(['weatherReducer', 'loading']);
const error = (state) => state.getIn(['weatherReducer', 'error']);

export const selectors = {
    dataWeather,
    loading,
    error,
};

//= ============== REDUCER ===============//
const initState = fromJS({
    dataWeather: {},
    loading: false,
    error: null,
});

const startGetCurrentWeather = (state) => state.set('loading', true);
const stopGetCurrentWeather = (state) => state.set('loading', false);
const getCurrentWeatherFailed = (state) =>
    state.set('error', {
        code: 444,
        message: 'something went wrong!',
    });
const getCurrentWeatherSuccess = (state, action) =>
    state.set('dataWeather', fromJS(action.payload)).set('error', null);

const reducer = handleActions(
    {
        [types.START_GET_CURRENT_WEATHER]: startGetCurrentWeather,
        [types.STOP_GET_CURRENT_WEATHER]: stopGetCurrentWeather,
        [types.GET_CURRENT_WEATHER_FAILED]: getCurrentWeatherFailed,
        [types.GET_CURRENT_WEATHER_SUCCESS]: getCurrentWeatherSuccess,
    },
    initState,
);

export default reducer;
