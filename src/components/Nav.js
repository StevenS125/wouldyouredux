import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleLogOut = (event) => {
    event.preventDefault();
    const { dispatch } = this.props
    // Set User
    dispatch(setAuthedUser(null))
  }

  render() {
    const {users, authedUser} = this.props

    const authedUserURL = authedUser && users[authedUser].avatarURL

  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
          </NavLink>
        </li>
        {this.props.authedUser === null ?
          <li><NavLink to='/login' activeClassName='active'>Login</NavLink></li> : null
        }
        <li><div className="col-sm-3"></div></li>
        <li style={{marginTop: -10, paddingTop:0}}> { 
        this.props.authedUser === null ? null : <div><span><img className="avatar" src={authedUserURL} alt={authedUser}></img></span><span>{this.props.authedUser}</span></div>
        }</li>
        <li style={{marginTop: -5, paddingTop:0}}> { this.props.authedUser === null ? null : <button onClick={this.handleLogOut}>Log Out</button>
        }</li>
      </ul>
    </nav>
  )
}
}

function mapStateToProps ({ users, authedUser }) {

  return {
    userIDs: Object.keys(users),
    users,
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)