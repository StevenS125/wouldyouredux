import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class NewQuestion extends Component {
  render() {
    return (
      <Form>
      <FormGroup>
         <Label for="exampleEmail">Input without validation</Label>
         <Input />
         <FormFeedback>You will not be able to see this</FormFeedback>
         <FormText>Example help text that remains unchanged.</FormText>
       </FormGroup>
     </Form>
    );
  }
}

function mapStateToProps ({ questions }) {

    return {
      questionIDs: Object.keys(questions),
      questions: questions
    }
  }

  export default connect(mapStateToProps)(NewQuestion)