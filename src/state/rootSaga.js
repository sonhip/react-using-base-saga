import { all, fork } from 'redux-saga/effects';
import { exampleSagas } from './modules/example';
import { weatherSagas } from './modules/weather';

export default function* rootSaga() {
    yield all([fork(exampleSagas), weatherSagas()]);
}
