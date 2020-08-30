import React from 'react';
import { connect } from 'react-redux'
import { buyMob,reducerMob } from '../redux/types'



/* a container for connect react to redux and showing on the page*/

function SumsongContainer(props){
    return (
         
        <div>
       
    
            <img src="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg" alt="1" width="125" height="150"></img>
            <h1>Samsung Mobile-stock {props.numOFMobs}</h1>
            
            <button  disabled={props.numOFMobs === props.top} onClick={props.reducerMob}>Reduce from cart -</button>
            <button  disabled={props.numOFMobs ===0} onClick={props.buyMob}>Add tO Cart +</button>
        </div>
        /* ba fahal shoda button ha props ha baray buymob va reducerMOb fahal mishe */
    );
};


/* baraye tabdil satat vorody be motagheyr haye ghabele estefade */

const mapStateToProps = state => {
    
    return{
        numOFMobs: state.mobReducer.numOFMobs,
        top      :  state.mobReducer.top
    }
}

/* baraye ejraye func haye buymob va redicer va moharefish be onvane props va ejraye anha */

const mapDispatchToProps = dispatch => {
    return{
        
        buyMob : () => dispatch (buyMob()),
        reducerMob : () => dispatch (reducerMob())


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SumsongContainer);

