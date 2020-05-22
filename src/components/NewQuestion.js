import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  render() {
    return (
        <div>New Question
      </div>
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