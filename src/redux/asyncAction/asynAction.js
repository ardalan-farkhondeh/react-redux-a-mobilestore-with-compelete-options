
import axios from 'axios';

const FETCH_DATE_SUCCESS = 'FETCH_DATE_SUCCESS';
const FETCH_DATE_FAILURE = 'FETCH_DATE_FAILURE';

const fetchUserSuccess = users => {
    return {
        type : FETCH_DATE_SUCCESS,
        payload :users

    }

}
const fetchUserFailure = error => {
    return {
        type : FETCH_DATE_FAILURE,
        payload : error

    }

}

/* a simple action for getting data from api  */

const fetchUsers = () => {
    return function(dispatch){
      axios.get('http://fakerestapi.azurewebsites.net/api/Users')
      .then(Response => {
        const users = Response.data.map(user => user.ID);
        dispatch(fetchUserSuccess(users))
  
      })
      .catch( error => {
          dispatch(fetchUserFailure(error.message))
      })
    }
  }



export default fetchUsers



/* import axios from 'axios';
 */
/* import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from './asyncTypesReducer'
 */
/* const initialState = {
 loading : false,
 user : [],
 error: ''
}

 */
/* const FETCH_USER_REQUEST = 'FETCH_USERS_REQUEST';
 */

/* const fetchUserRequest = () => {
    return {
        type : FETCH_USER_REQUEST
    }

} */
/* 

const asyncAction = (state = initialState , action) => { 
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading : true
            }
        case FETCH_DATE_SUCCESS:
            return {
                loading : false ,
                users : action.payload,
                error:''
            }
        case FETCH_DATE_FAILURE:
            return {
                loading : false ,
                users : [],
                error: action.payload
            }
            default:
                return state
  }
   
    
}
 */
