const initialState = {
    track: {
        listTransactions:{
            packages:{}
        }
    },
    trackNumber: ""
};

function LandingPageReducer(state = initialState, action) {
    const {type, track, trackNumber} = action;
    console.log("STATE BEFORE", state.addUser);
    switch (type) {
        case 'TRACK_SUCCESS':
            return {...state, track};
        case 'HANDLE_TRACK_NUMBER':
            return {...state, trackNumber}
        default:
            return state;
    }
}

export default LandingPageReducer;
