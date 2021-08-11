// @flow

import {createStore} from 'redux';
import {rootReducer} from './reducer';

export const store: mixed = createStore(rootReducer);
