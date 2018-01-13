import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

//for each user, call renderUser, and put it in an arry
//renderUser acting like a component
class UserList extends Component {
  componentWillMount(){
    this.props.fetchUsers();
  }

  renderUser(user){
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text"> Celtics </p>
        <a className="btn btn-primary"> Email </a>
      </div>
    );
  }

  render(){
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { users: state.users }
}

//which action creators do you want linked up? as the second argument
export default connect(mapStateToProps, actions)(UserList)
