import { BUY_TABLET } from './tabletTypesBuy'
import { REDUCER_TABLET } from './tabletTypesReducer'


const initialState = {
    numOFTablets:11,
    topTablet:11
    
}
/* an reducer for buying tablet */

 const tabletReducer = (state = initialState , action) => { 
        console.log(state.numOFTablets);
        switch (action.type) {
            case BUY_TABLET :
                return {
                    ...state,
                    numOFTablets: state.numOFTablets - 1,
                }
            case REDUCER_TABLET :
                return {
                    ...state,
                    numOFTablets: state.numOFTablets + 1


                }
            default:
                return state
      
      }
       
        
}
export default tabletReducer