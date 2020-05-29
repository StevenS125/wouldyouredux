import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
      const { questionIDs, questions, authedUser } = this.props
        console.log(questions, questionIDs, authedUser)
    return (
        <div>
      <h1>Leaderboard</h1>
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser }) {

    return {
      questionIDs: Object.keys(questions),
      questions: questions,
      authedUser
    }
  }

  export default connect(mapStateToProps)(Leaderboard)