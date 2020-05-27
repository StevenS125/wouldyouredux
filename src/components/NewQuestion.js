import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import { handleAddQuestion } from '../actions/questions';

class NewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1:'',
      input2: ''
    };
  }


  handleInput1 = (event) => {
    this.setState({
      input1: event.target.value
    })
  }

  handleInput2 = (event) => {
    this.setState({
      input2: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // todo: Handle Like Tweet
    const { dispatch, history } = this.props
    const optionOneText = this.state.input1
    const optionTwoText = this.state.input2
    dispatch(handleAddQuestion(optionOneText, optionTwoText))
    history.push('/')

  }

  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Create a New Question</h1>
      <FormGroup>
         <Label for="exampleEmail">Option 1 Text</Label>
         <Input value={this.state.input1} onChange={this.handleInput1} />
         <FormFeedback>You will not be able to see this</FormFeedback>
         <FormText>Enter the first input for the would you rather question</FormText>
       </FormGroup>
       <FormGroup>
         <Label for="exampleEmail">Option 2 Text</Label>
         <Input value={this.state.input2} onChange={this.handleInput2} />
         <FormFeedback>You will not be able to see this</FormFeedback>
         <FormText>Enter the second input for the would you rather question</FormText>
       </FormGroup>
       <Button>Submit</Button>
     </Form>
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

  export default connect(mapStateToProps)(NewQuestion)