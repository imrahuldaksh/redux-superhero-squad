import React, { Component } from "react";
import { connect } from "react-redux";

class SquadStats extends Component {
  sumProperty(prop) {
    let sum = 0;
    this.props.stats.forEach((item) => {
      if (item.hasOwnProperty(prop)) {
        sum += item[prop];
      }
    });
    return sum;
  }
  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength: </b> {this.sumProperty('strength')}
          </li>
          <li className="list-group-item">
            <b>Overall intelligence: </b> {this.sumProperty('intelligence')}
          </li>
          <li className="list-group-item">
            <b>Overall speed: </b> {this.sumProperty('speed')}
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stats: state.heroes,
  };
}

export default connect(mapStateToProps, null)(SquadStats);
