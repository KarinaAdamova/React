import { createStore, bindActionCreators } from 'redux';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }


ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));




