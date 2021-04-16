import types from './types';
import { sagas, actions } from './actions';
import reducer, { selectors } from './reducer';

export default reducer;

export {
    types as weatherTypes,
    sagas as weatherSagas,
    actions as weatherActions,
    selectors as weatherSelectors,
};
