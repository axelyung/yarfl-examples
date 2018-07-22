import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import { store } from './redux';

import Basic from './Forms/Basic';
import Async from './Forms/Async';
import Partitioned from './Forms/Partitioned';
import ArrayForm from './Forms/Array';
import ReactSelect from './Forms/ReactSelect';
import MaterialUI from './Forms/MaterialUI';
import Wizard from './Forms/Wizard';
import GetterSetter from './Forms/GetterSetter';
import ReactWidgets from './Forms/ReactWidgets';

const routes = [
    {
        path: '/basic',
        title: 'Basic',
        component: Basic,
    },
    {
        path: '/array-fields',
        title: 'Array fields',
        component: ArrayForm,
    },
    {
        path: '/partitioned',
        title: 'Paritioned',
        component: Partitioned,
    },
    {
        path: '/wizard',
        title: 'Wizard (multi-page)',
        component: Wizard,
    },
    {
        path: '/async',
        title: 'Async Validation',
        component: Async,
    },
    {
        path: '/getters-setters',
        title: 'With getters and setters',
        component: GetterSetter,
    },
    {
        path: '/react-select',
        title: 'With React Select',
        component: ReactSelect,
    },
    {
        path: '/material-ui',
        title: 'With Material UI',
        component: MaterialUI,
    },
    {
        path: '/react-widgets',
        title: 'With React Widgets',
        component: ReactWidgets,
    },
];

export default () => (
    <Provider store={store}>
        <HashRouter>
            <div className="app">
                <div className="sidebar">
                    <div className="header">
                        <h1>YARFL</h1>
                        <img src="./yarfl-logo.svg" className="App-logo" alt="logo" />
                    </div>
                    <strong>Yet Another Redux Forms Library</strong>
                    <Route
                        path="/"
                        render={({ location }) => (
                            <ul className="mt-1">
                                {routes.map(({ path, title }) => (
                                    <li key={path} className="links">
                                        {location.pathname.includes(path) ? (
                                            <strong>{title}</strong>
                                        ) : (
                                            <Link to={path}>{title}</Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )} />
                    <div className="sidebar-footer">
                        <a
                            href="https://www.npmjs.com/package/yarfl"
                            target="_blank"
                            rel="noopener noreferrer">
                            NPM
                        </a>
                        <a
                            href="https://github.com/axelyung/yarfl"
                            target="_blank"
                            rel="noopener noreferrer">
                            Github
                        </a>
                        <a
                            href="https://axelyung.github.io/yarfl"
                            target="_blank"
                            rel="noopener noreferrer">
                            Docs
                        </a>
                    </div>
                </div>
                <div className="main">
                    <Switch>
                        {routes.map(({ path, component }) => <Route key={path} path={path} component={component} />)}
                        <Redirect to="/basic" />
                    </Switch>
                </div>
            </div>
        </HashRouter>
    </Provider>
);
