import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { buyMob,reducerMob } from '../redux/types'

const HookSumsongContainer = () => {
const numberOFMobiles = useSelector (state => state.mobReducer.numOFMobs)
const topOFMobiles = useSelector (state => state.mobReducer.top)
const dispatch = useDispatch();

/* a container for connect react to redux and showing on the page with using hooks*/


 return (
     <div>
     <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg" alt="1" width="125" height="150"></img>
     <h2>BUY Sumsong mobile by hookmethod  {numberOFMobiles}</h2>
     <button  disabled={numberOFMobiles === topOFMobiles} onClick={() => dispatch (reducerMob())}>Reduce from cart -</button>
     <button  disabled={numberOFMobiles ===0} onClick={() => dispatch (buyMob())}>Add tO Cart + </button>
     </div>

 );

}
export default HookSumsongContainer