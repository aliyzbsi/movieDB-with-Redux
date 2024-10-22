import { legacy_createStore as createStore } from 'redux';
import { rootReducers } from './reducers';

export const myStore = createStore(rootReducers); //redux store ile değiştirin
