import React, {
  Component
} from 'react';
import { Link } from "react-router-dom";
import './BasicChampionProfile.css';
import ChampionProfileImage from '../championimage/ChampionProfileImage';

class BasicChampionProfile extends Component {

  render() {
    return (
      <Link className="BasicChampionProfile-link" to={`/champions/${this.props.championName}`}>
        <div className="BasicChampionProfile-profile">
          <ChampionProfileImage
              championName={this.props.championName}
              imageFileName={this.props.imageFileName}
              patchNumber={this.props.patchNumber}
          />
          <p className="BasicChampionProfile-name">{this.props.championName}</p>
        </div>
      </Link>
    );
  }

}

export default BasicChampionProfile;
