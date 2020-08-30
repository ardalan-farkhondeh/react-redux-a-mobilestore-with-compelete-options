import { combineReducers } from 'redux';
import mobReducer from '../mob/mobReducer';
import tabletReducer from '../tablet/tabletReducer';
import asyncAction from '../asyncAction/asynAction';
import users from '../asyncAction/userReducers';


/* combination all of the reducers */
/* tarkib reducer ha */
const rootReducer = combineReducers({
 mobReducer,
 tabletReducer,
 asyncAction,
 users

})

export default rootReducer