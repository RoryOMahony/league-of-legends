import React, {
  Component
} from 'react';
import './BasicChampionProfile.css';
import ChampionProfileImage from '../championimage/ChampionProfileImage';

class BasicChampionProfile extends Component {

  render() {
    return (
        <div className="BasicChampionProfile-profile">
          <ChampionProfileImage
              championName={this.props.championName}
              imageFileName={this.props.imageFileName}
              patchNumber={this.props.patchNumber}
          />
          <p className="BasicChampionProfile-name">{this.props.championName}</p>
        </div>
    );
  }
  
}

export default BasicChampionProfile;
