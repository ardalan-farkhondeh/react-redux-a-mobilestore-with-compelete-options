import React from 'react';
import { connect } from 'react-redux'
import { buyTablet,reducerTablet } from '../redux/types'



/* a container for connect react to redux and showing on the page*/

function TabletContainer(props){
    return (
         
        <div>
       
    
            <img src="https://www.yaphone.com/3554-large_default/tablet-samsung-galaxy-tab-s6-t860n.jpg" alt="1" width="125" height="150"></img>
            <h1>Samsung Tablet -stock {props.numOFTablets}</h1>
            <button  disabled={props.numOFTablets === props.topTablet} onClick={props.reducerTablet}>Reduce from cart -</button>
            <button  disabled={props.numOFTablets ===0} onClick={props.buyTablet}>Add tO Cart +</button>
            

        </div>
    );
};

const mapStateToProps = state => {
    return{
        numOFTablets: state.tabletReducer.numOFTablets,
        topTablet:  state.tabletReducer.topTablet,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buyTablet : () => dispatch (buyTablet()),
        reducerTablet : () => dispatch (reducerTablet()),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(TabletContainer);

