import {combineReducers} from 'redux';
import skillsReducer from "./skills";
import worksReducer from "./works";

export default combineReducers({
  skills: skillsReducer,
  works: worksReducer,
})