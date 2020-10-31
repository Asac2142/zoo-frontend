import { combineReducers } from 'redux';

import animalsReducer from './animals/animals.reducer';


const rootReducer = combineReducers({
    animals: animalsReducer
});

export default rootReducer;
