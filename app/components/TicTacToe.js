import React from "react";
import Cell from "./Cell";
import Button from "./Button";
import Text from "./Text";

class TicTacToe extends React.Component {
    render() {
        const game = this;
        return (
            <div>
                <Text message={this.props.message} />
                <div className="grid">
                    {
                        this.props.cells.map((value, cell) => (
                            <Cell key={cell} state={value} onPress={(evt) => {
                                game.props.onSetCell(cell, this.props.cells, this.props.player)
                            }}/>
                        ))
                    }
                </div>
                <div className="panel">
                    <Button label="Reset" onPress={(evt) => {
                        game.props.onReset()
                    }} />
                </div>
            </div>
        )
    }
}

export default TicTacToe
