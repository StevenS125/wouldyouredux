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
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
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
      </ul>
      { this.props.authedUser === null ? null :
          <div>
          <span>{this.props.authedUser}</span>
          <button onClick={this.handleLogOut}>Log Out</button>
          </div>
        }
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