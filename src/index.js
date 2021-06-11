import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store';
import thunk from 'redux-thunk';

const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        devTools
    )
)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
