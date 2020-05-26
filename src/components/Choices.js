import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';
import { handleToggleVote } from '../actions/questions'


class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questVal: null,
      hasAnswered: false
    };
  }

  componentDidMount() {
    if (this.props.question.optionOne.votes.includes(this.props.authedUser)){
    this.setState({
      hasAnswered: true,
      questVal: this.props.question.optionOne.text
    })
  }
  if (this.props.question.optionTwo.votes.includes(this.props.authedUser)){
    this.setState({
      hasAnswered: true,
      questVal: this.props.question.optionTwo.text
    })
  }
  }
  

  handleAnswer = (e) => {
    e.preventDefault()

    // todo: Handle Like Tweet
    const { dispatch, authedUser, question } = this.props
    const answer = this.state.questVal
    const qid = question.id

    dispatch(handleToggleVote({authedUser, qid, answer }))
    .then(() => {
      if (this.props.question.optionOne.votes.includes(this.props.authedUser)){
        this.setState({
          hasAnswered: true,
          questVal: this.props.question.optionOne.text
        })
      }
      if (this.props.question.optionTwo.votes.includes(this.props.authedUser)){
        this.setState({
          hasAnswered: true,
          questVal: this.props.question.optionTwo.text
        })
      }
    }
    )
  }


  render() {
    console.log(this.props)

    const { question } = this.props
    const quest1 = question.optionOne.text
    const quest2 = question.optionTwo.text
    const votes1 = question.optionOne.votes.length
    const votes2 = question.optionTwo.votes.length
  return (
    <div>
      {/* {this.state.hasAnswered ? <p>You have already voted</p> : <p> No Vote recorded</p>} */}
      <p>{quest1} votes:{votes1}</p>
      <p>{quest2} votes: {votes2}</p>
      { this.state.hasAnswered ? null :
      <ButtonGroup>
         <Button color="primary" onClick={() => this.setState({ questVal: 'optionOne' })}   active={this.state.questVal === quest1}>{quest1}</Button>
         <Button color="primary" onClick={() => this.setState({ questVal: 'optionTwo' })}   active={this.state.questVal === quest2}>{quest2}</Button>
      </ButtonGroup>
  }
      
  { this.state.hasAnswered ? null : <Button onClick={this.handleAnswer}>Submit Answer</Button> }
    </div>
  );
}
}

function mapStateToProps ({ questions, authedUser }, { id }) {
  const question = questions[id]
  
  return {
    authedUser,
    question: question,
    id: id
  }
}

export default connect(mapStateToProps)(Choices)