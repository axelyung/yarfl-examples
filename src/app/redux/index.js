import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { init } from 'yarfl';

import configs from './configs';

// initialize forms
const { reducer, initialState, connect, FormProvider } = init(...configs);

// add chrome devtool
const devTool = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// add thunk middleware
const storeCreator = compose(applyMiddleware(thunk), devTool)(createStore);

const store = storeCreator(reducer, initialState);

export { connect, FormProvider, store };
