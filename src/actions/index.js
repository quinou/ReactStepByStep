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

export const updateSlid= (slid_obj) => {
    return {
        type: 'UPDATE_PRESENTATION_SLIDS',
        obj: slid_obj
    }
}

export const updatePresentationContent= (title, description) => {
    return {
        type: 'UPDATE_PRESENTATION_CONTENT',
        title: title,
        description: description,
    }
}