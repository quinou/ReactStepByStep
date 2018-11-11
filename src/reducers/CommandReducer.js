const commandReducer = (state = { cmdPres: {} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'COMMAND_PRESENTATION':
        console.log(action.obj);
            const newState1 = { cmdPres: action.obj };
            return newState1;
        default:
            return state;
    }
}
export default commandReducer;