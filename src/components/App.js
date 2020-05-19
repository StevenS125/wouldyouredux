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
      <Router>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {this.props.loading === true
            ? null
            : <div>
                <Route path='/' exact component={Home} />
                <Route path='/question/:id' component={Question} />
                <Route path='/new' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
              </div>}
        </div>
      </Fragment>
    </Router>
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