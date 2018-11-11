import { combineReducers } from 'redux';
import selectedReducer from './SelectedReducer';
import updateModelReducer from './UpdateModelReducer';
import commandReducer from './CommandReducer';

const globalReducer = combineReducers({
    selectedReducer: selectedReducer,
    updateModelReducer: updateModelReducer,
    commandReducer: commandReducer
});

export default globalReducer;