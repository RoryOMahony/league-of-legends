import React, {
  Component
} from 'react';
import { Link } from "react-router-dom";
import './BasicChampionProfile.css';
import ChampionProfileImage from '../championimage/ChampionProfileImage';

const BasicChampionProfile = ({championName, imageFileName, patchNumber}) => {

    return (
      <Link className="BasicChampionProfile-link" to={`/champions/${championName}`}>
        <div className="BasicChampionProfile-profile">
          <ChampionProfileImage
              championName={championName}
              imageFileName={imageFileName}
              patchNumber={patchNumber}
          />
          <p className="BasicChampionProfile-name">{championName}</p>
        </div>
      </Link>
    );

}

export default BasicChampionProfile;
