import React, {
  Component
} from 'react';
import './NavigationBar.css';

class NaviagationBar extends Component {
  render() {
    return (
      <ul className="navigation-list">
        <li className="navigation-item">
          <a className="navigation-link" href="">Home</a>
        </li>
        <li className="navigation-item">
          <a className="navigation-link" href="">Champions</a>
        </li>
      </ul>
    );
  }
}

export default NaviagationBar;