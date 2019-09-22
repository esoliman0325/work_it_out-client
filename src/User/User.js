import React, { Component } from 'react';
import './User.css';
import defaultUserImage from '../Assets/tomatoes-default-user-image.png';

class User extends Component {
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
      <div id="user-display">
        <div id="avatar">
          <img src={this.context.user ? this.context.user.photoURL : defaultUserImage} alt="user" />
        </div>
        <div id="user-display-name">{this.context.user ? this.context.user.displayName.split(' ')[0] : 'Username'}</div>
          <button className='sign-up' onClick={() => this.context.user ? this.handleSignOut() : this.handleSignIn()}>
            SIGN {this.context.user ? 'OUT' : 'IN'}
          </button>
      </div>
    );
  }
}

export default User;