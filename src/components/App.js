import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
// Components





class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
const { loading, users, authedUser} = this.props

setTimeout(() => {
  console.log(users)  
}, 3000);


    return (
<div>
  {authedUser}
  {users.id}
</div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }) {
  return {
    loading: authedUser === null,
    users,
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(App)