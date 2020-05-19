import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'


// Components
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './Leaderboard'
import Question from './Question'
import Nav from './Nav'
import Login from './Login'





class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
const { loading, users, authedUser, questions, userIDs} = this.props

setTimeout(() => {
  console.log(loading)
}, 2000);


    return (
      <Router>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {this.props.loading === true
            ? <Login />
            : <div>
                <Route path='/' exact component={Home} />
              </div>}
        </div>
      </Fragment>
    </Router>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions, loading }) {
  return {
    loading: authedUser === null,
  }
}

export default connect(mapStateToProps)(App)