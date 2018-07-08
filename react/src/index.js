import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import App from './components/App.js'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

