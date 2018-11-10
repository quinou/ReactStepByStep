const selectedReducer = (state = { slid: {} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_SELECTED_SLID':
            const newState1 = { slid: action.obj };
            return newState1;
        case 'UPDATE_DRAGGED_ELEMENT':
            const newSlid = JSON.parse(JSON.stringify(state.slid));
            newSlid.content_id = action.obj;
            const newStateSlid = {slid: newSlid};
            return newStateSlid;
        default:
            return state;
    }
}
export default selectedReducer;