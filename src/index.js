import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavigationBar from './navigationbar/NavigationBar';
import ChampionNames from './championnames/ChampionNames';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<NavigationBar />, document.getElementById('navigationBar'));
ReactDOM.render(<ChampionNames />, document.getElementById('championNames'));
