import React, { Component } from "react";

class ChampionProfileImage extends Component {
  render() {
    var imageUrl =
      "http://ddragon.leagueoflegends.com/cdn/" +
      this.props.patchNumber +
      "/img/champion/" +
      this.props.imageFileName;
    var imageAlternative = this.props.championName + " profile image";
    return (
      <img
        className="champion-profile-image"
        src={imageUrl}
        alt={imageAlternative}
        height="120"
        width="120"
      />
    );
  }
}

export default ChampionProfileImage;
