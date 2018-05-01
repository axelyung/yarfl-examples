import { createStore } from 'redux';
import { validateReducer } from 'redux-validated';

import { config } from './config';

const reducer = (state, action) => state;

const validatedReducer = validateReducer(config, reducer);

export const store = createStore(validatedReducer, {}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);