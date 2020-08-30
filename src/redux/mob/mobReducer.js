import { BUY_MOB } from './mobTypesBuy'
import { REDUCER_MOB } from './mobTypesReducer'


const initialState = {
    numOFMobs:6,
    top:6
    
}


/* an reducer for buying mobile */
 const mobReducer = (state = initialState , action) => { 
        console.log(state.numOFMobs);
        switch (action.type) {
            case BUY_MOB :
                return {
                    ...state,
                    numOFMobs: state.numOFMobs - 1,
                }
            case REDUCER_MOB :
                return {
                    ...state,
                    numOFMobs: state.numOFMobs + 1


                }
            default:
                return state
      
      }
       
        
}
export default mobReducer