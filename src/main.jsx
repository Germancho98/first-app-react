import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './counter-app';
import { FirstApp } from './firstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <CounterApp value={ 20 } />
        {/* <FirstApp title="Hola, Soy Vegeta" /> */}
    </React.StrictMode>
);