import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

//for each user, call renderUser, and put it in an arry
//renderUser acting like a component

//jsonplaceholder.typicode.com/users
class UserList extends Component {
  componentWillMount(){
    this.props.fetchUsers();
  }

  renderUser(user){
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text"> {user.company.name} </p>
        <a className="btn btn-primary" href={user.website}> Website </a>
      </div>
    );
  }

  render(){
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state){
  //refers to the reducer,
  //you named it users in the Root Reducer, so you need to
  //call it in that form;
  return { users: state.users }
}

//which action creators do you want linked up? as the second argument
export default connect(mapStateToProps, actions)(UserList)
