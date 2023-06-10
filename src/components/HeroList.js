import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeCharacterById, removeCharactersFromSquad } from "../actions";

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad List</h4>
        <ul className="list-group">
          {this.props.heroList.map((hero) => {
            return (
              <li className="list-group-item" key={hero.id}>
                <div className="list-item">{hero.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.removeCharacterById(hero.id)}
                >
                  x
                </div>
              </li>
            );
          })}
        </ul>
        {!!this.props.heroList.length && (
          <div
            className="list-item right-button clear-list"
            onClick={() => this.props.removeCharactersFromSquad()}
          >
            Clear All Hero Squad List
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroList: state.heroes,
  };
}

function dispatchStateToProps(dispatch) {
  return bindActionCreators({ removeCharacterById, removeCharactersFromSquad}, dispatch);
}

export default connect(mapStateToProps, dispatchStateToProps)(HeroList);
