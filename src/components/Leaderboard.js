import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
  }




  render() {
      const { questionIDs, questions, userNames, authedUser } = this.props

      let usersPoints = userNames && userNames.map((name, index) => {
        console.log(name)
        let points = 0
        questionIDs.map((ids) => {
          if (questions[ids].optionOne.votes.includes(name) || questions[ids].optionTwo.votes.includes(name)) {
            points++
          }
          return null
        })

        return (
          <div key={index}>
            <h2>{name}</h2>
            <h3>Points: {points}</h3>
          </div>
        )

      })

    return (
        <div>
          { authedUser ? <div> 
                          <h1>Leaderboard</h1>
                            <div>{usersPoints}</div> 
                          </div>
                       : <div>
                         <h1>Please Login to Continue </h1>
                         <Link to='/login'><Button>Login</Button></Link>
                         </div>
          }
      </div>
    );
  }
}

function mapStateToProps ({ questions, authedUser, users }) {

    return {
      questionIDs: Object.keys(questions),
      questions: questions,
      authedUser,
      userNames: Object.keys(users)
    }
  }

  export default connect(mapStateToProps)(Leaderboard)