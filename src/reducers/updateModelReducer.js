const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_PRESENTATION':
            const newStatePresentation = { presentation: action.obj, content_map: state.content_map };
            return newStatePresentation;

        case 'UPDATE_PRESENTATION_SLIDS':
            const newPresentation = JSON.parse(JSON.stringify(state.presentation));
            for (let slid in newPresentation.slidArray) {
                if (newPresentation.slidArray[slid].id === action.obj.id) {
                    newPresentation.slidArray[slid] = action.obj;
                }
            }
            const newStatePresentationSlids = { presentation: newPresentation, content_map: state.content_map };
            return newStatePresentationSlids;

        case 'UPDATE_CONTENT_MAP':
            const newStateContentMap = { presentation: state.presentation, content_map: action.obj };
            return newStateContentMap;

        case 'UPDATE_PRESENTATION_CONTENT':
            const newPresentationContent = JSON.parse(JSON.stringify(state.presentation));
            newPresentationContent.title = action.title;
            newPresentationContent.description = action.description;
            const newStatePresentationContent = { presentation: newPresentationContent, content_map: state.content_map };
            return newStatePresentationContent;
            
        case 'ADD_CONTENT':
            return; //TO DO

        
        default:
            return state;
    }
}
export default updateModelReducer;