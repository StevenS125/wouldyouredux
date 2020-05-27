import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'tylermcginnis'};
      }

      handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { dispatch, history } = this.props
    
        // Set User
        dispatch(setAuthedUser(this.state.value))
        history.push('/')
      }

  render() {
      const { userIDs, users} = this.props

    let userOptions = userIDs.map((ids) => {
        return <option key={ids} value={users[ids].id}>{users[ids].id}</option>
    })

    return (
        <div>
      <h1>Please Login to Continue</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Your Login Name:
          <select value={this.state.value} onChange={this.handleChange}>
            {userOptions}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {

    return {
      userIDs: Object.keys(users),
      users,
      authedUser
    }
  }

  export default connect(mapStateToProps)(Login)