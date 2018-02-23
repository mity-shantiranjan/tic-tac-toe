import React from "react";
import Store from "./Store";
import TicTacToeState from './TicTacToeState';
import { Provider } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "X"
    };
  }
  render() {
    return(
        <Provider store={Store}>
            <TicTacToeState player={this.state.player} />
        </Provider>
    )
  }
}

module.exports = App;
