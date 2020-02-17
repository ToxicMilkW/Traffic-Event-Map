import React from 'react';
import logo from './assets/logo.svg';
import "./styles/Topbar.css"
import './styles/App.css';

export function Topbar() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title"> Around </h1>
            </header>
        </div>
    );
}
