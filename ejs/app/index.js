import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './container/App';
import configureStore from './reducer';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
