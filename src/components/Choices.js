import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'reactstrap';
import { formatQuestion } from '../utils/_DATA'
import { handleToggleVote } from '../actions/questions'


class Choices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questVal: null,
    };
  }
  

  handleAnswer = (e) => {
    e.preventDefault()

    // todo: Handle Like Tweet
    const { dispatch, authedUser, id } = this.props
    console.log(authedUser)
    const answer = this.state.questVal

    dispatch(handleToggleVote({authedUser, id, answer }))
  }


  render() {
    console.log(this.props)

    const { question } = this.props
    const quest1 = question.optionOne.text
    const quest2 = question.optionTwo.text
    const votes1 = question.optionOne.votes
    const votes2 = question.optionTwo.votes
  return (
    <div>
      <p>Selected: {this.state.questVal}</p>
      <p>vote 1:{votes1}</p>
      <p>vote 2: {votes2}</p>
      <ButtonGroup>
         <Button color="primary" onClick={() => this.setState({ questVal: 'optionOne' })}   active={this.state.questVal === quest1}>{quest1}</Button>
         <Button color="primary" onClick={() => this.setState({ questVal: 'optionTwo' })}   active={this.state.questVal === quest2}>{quest2}</Button>
      </ButtonGroup>
      
      <Button onClick={this.handleAnswer}>Submit Answer</Button>
    </div>
  );
}
}

function mapStateToProps ({ questions, authedUser }, { id }) {
  const question = questions[id]
  
  return {
    authedUser,
    question: formatQuestion(question.optionOne.text, question.optionTwo.text, question.author)
  }
}

export default connect(mapStateToProps)(Choices)