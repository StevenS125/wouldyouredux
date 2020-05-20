import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestion extends Component {
  render() {
      const { questionIDs, questions } = this.props
        console.log(this.props.questions)
    let pop = questionIDs.map((ids) => {
            return <div>{questions[ids].optionOne.text}</div>
        })
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