import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './HeaderBar.css';

class HeaderBar extends Component {
  render() {
    return (
      <div className="HeaderBar">
        <header className="HeaderBar-header">
          <img src={logo} className="HeaderBar-logo" alt="logo" />
          <h1 className="HeaderBar-title">League Of Legends</h1>
        </header>
      </div>
    );
  }
}

export default HeaderBar;
