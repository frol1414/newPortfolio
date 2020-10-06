import {combineReducers} from 'redux';
import skillsReducer from "./skills";
import worksReducer from "./works";
import otherReducer from "./other"

export default combineReducers({
  skills: skillsReducer,
  works: worksReducer,
  other: otherReducer,
})