import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/types'

 

/* an simple container for run an asynaction  */

function asynActionContianer(props){
    return (
         
        <div>
        
            <div> {props.fetchUsers}</div>

                   
            
        </div>
    );
};

const mapStateToProps = state => {
    
    return{

    }
}


const mapDispatchToProps = dispatch => {
    return{   
        fetchUsers : () => dispatch (fetchUsers())


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(asynActionContianer);

