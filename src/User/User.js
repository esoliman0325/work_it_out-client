import React, { Component } from 'react';
import WorkoutsContext from '../WorkoutsContext';
import './User.css';

class User extends Component {
static contextType = WorkoutsContext;

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.context.updateUser(user);
		});
  }
  
  handleSignIn = () => {
    this.props.firebase.auth().signInWithPopup(new this.props.firebase.auth.GoogleAuthProvider());
  }
  
  handleSignOut = () => {
    this.props.firebase.auth().signOut();
  }
  
  render() {
    return (
      <div>
				<button className='sign-in-out' onClick={() => this.context.user ? this.handleSignOut() : this.handleSignIn()}>
          SIGN {this.context.user ? 'OUT' : 'IN'}
        </button>
      </div>
    );
  }
}

export default User;