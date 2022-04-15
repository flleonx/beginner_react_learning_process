import React from 'react';
import ReactDOM from 'react-dom';
// import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './index.css';

const rootDiv = document.querySelector('#root');

// ReactDOM.render( <FirstApp greet="Hello World"/>, rootDiv );
ReactDOM.render( <CounterApp value={ 10 }/>, rootDiv );
