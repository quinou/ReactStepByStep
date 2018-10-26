const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_PRESENTATION':
            const newStatePresentation = { presentation: action.obj };
            return newStatePresentation;
        case 'UPDATE_PRESENTATION_SLIDS':
            return; //TO DO
        case 'UPDATE_CONTENT_MAP':
            const newStateContentMap = { content_map: action.obj };
            return newStateContentMap;
        case 'ADD_CONTENT':
            return; //TO DO
        default:
            return state;
    }
}
export default updateModelReducer;