import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderBar from './headerbar/HeaderBar.jsx';
import NavigationBar from './navigationbar/NavigationBar.jsx';
import ChampionProfileImage from './championimage/ChampionProfileImage.jsx';
import ChampionNames from './championnames/ChampionNames.jsx';
import ChampionSelection from './championselection/ChampionSelection.jsx';

ReactDOM.render(<HeaderBar />, document.getElementById('headerBar'));
ReactDOM.render(<NavigationBar />, document.getElementById('navigationBar'));
ReactDOM.render(<ChampionSelection />, document.getElementById('championSelection'));
// ReactDOM.render(
//   <ChampionProfileImage
//       patchNumber="8.8.1"
//       imageFileName="Leona.png"
//       championName="Leona"
//   />, document.getElementById('championProfileImage'));
// ReactDOM.render(<ChampionNames />, document.getElementById('championNames'));