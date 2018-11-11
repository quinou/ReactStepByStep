export const setSelectedSlid = (slid_obj) => {
    return {
        type: 'UPDATE_SELECTED_SLID',
        obj: slid_obj
    };
}

export const updateContentMap = (contentMap_obj) => {
    return {
        type: 'UPDATE_CONTENT_MAP',
        obj: contentMap_obj
    };
}

export const updatePresentation= (presentation_obj) => {
    return {
        type: 'UPDATE_PRESENTATION',
        obj: presentation_obj
    }
}

export const updateSlid= (event, slid_obj) => {
    return {
        type: 'UPDATE_PRESENTATION_SLIDS',
        slid: slid_obj,
        event: event,
    }
}

export const updatePresentationContent= (title, description) => {
    return {
        type: 'UPDATE_PRESENTATION_CONTENT',
        title: title,
        description: description,
    }
}

export const updateDraggedElt= (id) => {
    return {
        type: 'UPDATE_DRAGGED_ELEMENT',
        obj: id,
    }
}

export const sendNavCmd= (command) => {
    return {
        type: 'COMMAND_PRESENTATION',
        obj: command,
    }
}