const updateModelReducer = (state = { presentation: {}, content_map: {} }, action) => {
    console.log(action);
    switch (action.type) {
        case 'UPDATE_PRESENTATION':
            const newStatePresentation = { presentation: action.obj, content_map: state.content_map };
            return newStatePresentation;

        case 'UPDATE_PRESENTATION_SLIDS':
            const newPresentation = JSON.parse(JSON.stringify(state.presentation));
            if(action.event === 'update'){
                for (let slid in newPresentation.slidArray) {
                    if (newPresentation.slidArray[slid].id === action.slid.id) {
                        newPresentation.slidArray[slid] = action.slid;
                    }
                }
            }
            else if(action.event === 'REMOVE_CMD'){
                for (let i=0; i<newPresentation.slidArray.length; i++) {
                    if (newPresentation.slidArray[i].id === action.slid.id) {
                        newPresentation.slidArray.splice(i,1);
                    }
                }
            }
            else if(action.event === 'ADD_CMD'){
                newPresentation.slidArray.push(action.slid);
                newPresentation.slidArray.sort();
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
