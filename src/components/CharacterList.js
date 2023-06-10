import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCharacterById } from "../actions";

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Character List</h4>
        <ul className="list-group">
          {this.props.characters.map((item, index) => {
            return (
              <li key={item.id} className="list-group-item">
                <div className="list-item">{item.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => this.props.addCharacterById(item.id)}
                >
                  +
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.characters,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCharacterById }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
