import React from "react";

class Text extends React.Component {
    render() {
        return (
            <div className="flashline">{ this.props.message }</div>
        )
    }
}

export default Text;
