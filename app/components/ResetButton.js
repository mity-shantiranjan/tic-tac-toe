import { connect } from "react-redux";

const ResetButton = ({ dispatch }) => {
    return (
        <Button label="Reset" onPress={dispatch}/>
    )
};

connect()(resetButton);

export default ResetButton;
