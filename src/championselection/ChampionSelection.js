import React, {
  Component
} from 'react';
import './ChampionSelection.css';
import championData from '../data/AllChampionData.json'
import BasicChampionProfile from './BasicChampionProfile';

class ChampionSelection extends Component {

  constructor(props){
    super();
    this.state={
      championProfiles: []
    };
  }

  componentDidMount() {
    var patchNumber = championData.version;

    var championKeys = Object.keys(championData.data);
    championKeys.sort(function(championA, championB) {
      var championNameA = championData.data[championA].name;
      var championNameB = championData.data[championB].name;
      if (championNameA < championNameB) return -1;
      if (championNameA > championNameB) return 1;
      return 0;
    });

    var championProfiles = championKeys.map((key) =>
        <BasicChampionProfile key={key} className="ChampionSelection-profile"
            championName = {championData.data[key].name}
            imageFileName = {championData.data[key].image.full}
            patchNumber = {patchNumber}
        />
    );

    this.setState({
      championProfiles: championProfiles
    });
  }

  render() {
    return (
        <div className="ChampionSelection-profiles">
          {this.state.championProfiles}
        </div>
    );
  }
}

export default ChampionSelection;
