import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
      }

      handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    
      handleSubmit = (event) => {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }

  render() {
      const { userIDs, users, authedUser} = this.props

    let userOptions = userIDs.map((ids) => {
        return <option key={ids} value={users[ids].id}>{users[ids].id}</option>
    })

    return (
        <div>
      <h1>Please Login to Continue</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
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