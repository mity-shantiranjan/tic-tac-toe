const Player = (state = 'X', action) => {
    switch (action.type) {
        case 'ADD_MOVE':
            return (state === 'X') ? 'O' : 'X';
        case 'RESET':
            return 'X';
        default:
            return state;
    }
};

export default Player;
