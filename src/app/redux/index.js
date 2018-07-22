import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { init } from 'yarfl';
import logger from 'redux-logger';
import configs from './configs';

// initialize forms
const { reducer, initialState, connect, FormProvider } = init(...configs);

// add redux devtool
const devToolExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// use redux-logger middleware if devtool extension is missing
const enhancer = devToolExtension
    ? compose(applyMiddleware(thunk), devToolExtension)
    : applyMiddleware(thunk, logger);

const store = createStore(reducer, initialState, enhancer);

export { connect, FormProvider, store };
