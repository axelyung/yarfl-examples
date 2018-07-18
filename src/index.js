import React from 'react';
import ReactDOM from 'react-dom';
import bsd from 'bootstrap-size-display';

import './styles.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

if (window.location.hostname === 'localhost') {
    bsd();
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
