import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fecthCategoryLevel2 } from './container/App/action';
import App from './container/App';
import configureStore from './reducer';

const store = configureStore();

store.dispatch(fecthCategoryLevel2('5a007c92c846cac15b53ab81'));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
