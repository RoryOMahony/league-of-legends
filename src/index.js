import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderBar from './headerbar/HeaderBar';
import NavigationBar from './navigationbar/NavigationBar';
import ChampionProfileImage from './championimage/ChampionProfileImage';
import ChampionNames from './championnames/ChampionNames';

ReactDOM.render(<HeaderBar />, document.getElementById('headerBar'));
ReactDOM.render(<NavigationBar />, document.getElementById('navigationBar'));
ReactDOM.render(
  <ChampionProfileImage
      patchNumber="8.8.1"
      imageFileName="Leona.png"
      championName="Leona"
  />, document.getElementById('championProfileImage'));
ReactDOM.render(<ChampionNames />, document.getElementById('championNames'));