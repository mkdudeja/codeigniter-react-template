import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './app/store';
import App from './app/app';

import './styles.scss';

ReactDOM.render(<Provider store={configureStore()}>
    <App />
</Provider>, document.getElementById('root'));
