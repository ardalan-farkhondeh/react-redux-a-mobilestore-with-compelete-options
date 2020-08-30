import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../redux/asyncAction/usersActions'


/* a container for connect react to redux and doing asynaction to show the name of the one specific user(axios)*/

 class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(users.id)

        return (
           
            <div>

                {users.map(u =>{
                    if(u.id===1)
                    return  <React.Fragment key={u.id}> 
                    <div>
                    <h1>User Name: {u.username}</h1>
                    <h1>Email: {u.email}</h1>
                    <h6>(access to user with axios)</h6>
                    </div>
                    </React.Fragment>
                    return null
                })}
                
            </div>
        )
    }

}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)


/* 
{users.map(u => 
    <React.Fragment key={u.id}>
   
        <h6 >{u.name}</h6> 
        
    </React.Fragment>
)}

 */